import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DegreeService } from '../degree.service';
import { Degree } from '../degree';
import { Location } from '@angular/common';

@Component({
  selector: 'app-degree-create',
  templateUrl: './degree-create.component.html',
  styleUrls: ['./degree-create.component.css']
})
export class DegreeCreateComponent implements OnInit {

  public degree: Degree;

  constructor(private router: Router,
              private location: Location,
              private degreeService: DegreeService) { }

  ngOnInit(): void {
    this.degree = new Degree();
  }

  onSubmit(): void {
    this.degreeService.createResource({ body: this.degree }).subscribe((degree: Degree) => {
      this.router.navigate(['/degrees', this.degree.getSelfLinkHref().split('/')[4]]);
    });

  }

  onCancel(): void {
    this.location.back();
  }

}
