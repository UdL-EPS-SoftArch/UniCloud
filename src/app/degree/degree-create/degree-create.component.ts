import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DegreeService } from '../degree.service';
import { Degree } from '../degree';
import { Location } from '@angular/common';
import {University} from '../../university/university';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {UniversityService} from '../../university/university.service';

@Component({
  selector: 'app-degree-create',
  templateUrl: './degree-create.component.html',
  styleUrls: ['./degree-create.component.css']
})
export class DegreeCreateComponent implements OnInit {

  public degree: Degree;
  public universities: University[] = [];
  public universitySelected = '';

  constructor(private router: Router,
              private location: Location,
              private degreeService: DegreeService,
              private universityService: UniversityService) { }

  ngOnInit(): void {
    this.degree = new Degree();
    this.universityService.getPage().subscribe(
      (page: PagedResourceCollection<University>) => {
        this.universities = page.resources;
      });
  }

  onSubmit(): void {
    this.universitySelected = '/universities/' + this.universitySelected;
    // @ts-ignore
    this.degree.university = this.universitySelected;
    this.degreeService.createResource({ body: this.degree }).subscribe((degree: Degree) => {
      this.router.navigate(['/degrees', degree.id]);
    });

  }

  onCancel(): void {
    this.location.back();
  }

}
