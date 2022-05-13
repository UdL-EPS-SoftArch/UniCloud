import { Component, OnInit } from '@angular/core';
import {Subject} from '../subject';
import {ActivatedRoute} from '@angular/router';
import {SubjectService} from '../subject.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  public subject: Subject = new Subject();

  constructor(private route: ActivatedRoute,
              private subjectService: SubjectService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subjectService.getResource(id).subscribe(
      subject => {
        this.subject = subject;
      });
  }
  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
