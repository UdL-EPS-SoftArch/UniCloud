import { Component, OnInit } from '@angular/core';
import {Subject} from '../subject';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../subject.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-subject-delete',
  templateUrl: './subject-delete.component.html',
  styleUrls: ['./subject-delete.component.css']
})
export class SubjectDeleteComponent implements OnInit {
  public subject: Subject = new Subject();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private subjectService: SubjectService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subjectService.getResource(this.id).subscribe(
      subject => this.subject = subject);

  }

  delete(): void {
    this.subjectService.deleteResource(this.subject).subscribe(
      () => {
      this.router.navigate(['/subjects']);
    });
  }
}
