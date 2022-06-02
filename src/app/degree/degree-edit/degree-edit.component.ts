import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DegreeService} from '../degree.service';
import {Degree} from '../degree';
import { Location } from '@angular/common';
import {University} from '../../university/university';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {UniversityService} from '../../university/university.service';

@Component({
  selector: 'app-degree-edit',
  templateUrl: './degree-edit.component.html',
  styleUrls: ['./degree-edit.component.css']
})
export class DegreeEditComponent implements OnInit {

  public degree: Degree = new Degree();
  public universities: University[] = [];
  public universitySelected = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private degreeService: DegreeService,
              private universityService: UniversityService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.degreeService.getResource(id).subscribe(
      (degree: Degree) => {
          degree.getRelation('university').subscribe((university: University) => {
          degree.university = university;
          this.degree = degree;
        });
      });
    this.universityService.getPage().subscribe(
      (page: PagedResourceCollection<University>) => {
        this.universities = page.resources;
      });
  }

  onSubmit(): void {
    this.universitySelected = '/universities/' + this.universitySelected;
    // @ts-ignore
    this.degree.university = this.universitySelected;
    this.degreeService.patchResource(this.degree).subscribe(
      (patchedDegree: Degree) => {
        this.router.navigate(['degrees', this.degree.getSelfLinkHref().split('/')[4]]);
      });
  }

  onCancel(): void {
    this.location.back();
  }
}
