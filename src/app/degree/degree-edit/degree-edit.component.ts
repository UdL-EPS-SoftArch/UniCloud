import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DegreeService} from '../degree.service';
import {Degree} from '../degree';
import { Location } from '@angular/common';
import {University} from '../../university/university';

@Component({
  selector: 'app-degree-edit',
  templateUrl: './degree-edit.component.html',
  styleUrls: ['./degree-edit.component.css']
})
export class DegreeEditComponent implements OnInit {

  public degree: Degree = new Degree();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private degreeService: DegreeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.degreeService.getResource(id).subscribe(
      (degree: Degree) => {
          degree.getRelation('university').subscribe((university: University) => {
          degree.university = university;
          this.degree = degree;
        });
      });
  }

  onSubmit(): void {
    this.degreeService.patchResource(this.degree).subscribe(
      (patchedDegree: Degree) => {
        this.router.navigate(['degrees', this.degree.getSelfLinkHref().split('/')[4]]);
      });
  }

  onCancel(): void {
    this.location.back();
  }
}
