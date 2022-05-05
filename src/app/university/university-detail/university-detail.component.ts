import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityService } from '../university.service';
import { University } from '../university';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.css']
})
export class UniversityDetailComponent implements OnInit {
  public university: University = new University();

  constructor(private route: ActivatedRoute,
              private universityService: UniversityService,
              private authenticationService: AuthenticationBasicService){
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.universityService.getResource(id).subscribe(
      university => {
        this.university = university;
      });
  }
  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
