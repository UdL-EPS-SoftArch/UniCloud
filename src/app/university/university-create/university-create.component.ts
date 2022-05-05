import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { UniversityService } from '../university.service';
import { University } from '../university';
import { Location } from '@angular/common';

@Component({
  selector: 'app-university-create',
  templateUrl: './university-create.component.html',
  styleUrls: ['./university-create.component.css']
})
export class UniversityCreateComponent implements OnInit {

  public university: University;

  constructor(private router: Router,
              private location: Location,
              private universityService: UniversityService) {
  }

  ngOnInit(): void {
    this.university = new University();
  }

  onSubmit(): void {
    this.universityService.createResource({ body: this.university }).subscribe((university: University) => this.router.navigate(['universities', university.id]));
  }

  onCancel(): void {
    this.location.back();
  }

}
