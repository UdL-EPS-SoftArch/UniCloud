import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { UniversityService } from '../university.service';
import {University} from '../university';

@Component({
  selector: 'app-university-delete',
  templateUrl: './university-delete.component.html',
  styleUrls: ['./university-delete.component.css']
})
export class UniversityDeleteComponent implements OnInit {
  public university: University = new University();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private universityService: UniversityService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.universityService.getResource(this.id).subscribe(
      university => this.university = university);
  }

  delete(): void {
    this.universityService.deleteResource(this.university).subscribe(
      () => {
        this.router.navigate(['universities']);
      });
  }

}

