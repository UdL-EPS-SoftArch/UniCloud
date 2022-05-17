import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Degree} from '../degree';
import {DegreeService} from '../degree.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {University} from '../../university/university';

@Component({
  selector: 'app-degree-detail',
  templateUrl: './degree-detail.component.html',
  styleUrls: ['./degree-detail.component.css']
})
export class DegreeDetailComponent implements OnInit {
  public degree: Degree = new Degree();

  constructor(private route: ActivatedRoute,
              private degreeService: DegreeService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.degreeService.getResource(id).subscribe(
      degree => {
        degree.getRelation('university').subscribe((university: University) => {
          degree.university = university;
        });
        this.degree = degree;
      });
  }
  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
