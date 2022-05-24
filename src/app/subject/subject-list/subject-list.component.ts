import { Component, OnInit } from '@angular/core';
import {PagedResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {Subject} from '../subject';
import {Router} from '@angular/router';
import {SubjectService} from '../subject.service';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  public subjectsPagedResource: PagedResourceCollection<Subject>;
  public subjects: Subject[] = [];
  public pageSize = 5;
  public page = 1;
  public totalSubjects = 0;

  constructor(public router: Router,
              private subjectService: SubjectService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.subjectService.getPage({pageParams: {size: this.pageSize}, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<Subject>) => {
        this.subjectsPagedResource = page;
        this.subjects = page.resources;
        this.totalSubjects = page.totalElements;
      });
  }
  changePage(): void {
    this.subjectsPagedResource.customPage({pageParams: {page: this.page - 1, size: this.pageSize}, sort: {name: 'ASC'}}).subscribe(
      (page: PagedResourceCollection<Subject>) => {
        this.subjects = page.resources;
      });
  }
  modifyList(subjectPagedResource: PagedResourceCollection<Subject>): void {
    this.subjectsPagedResource = subjectPagedResource;
    this.subjects = this.subjectsPagedResource.resources;
    this.totalSubjects = this.subjectsPagedResource.totalElements;
  }
  isRole(role: string): boolean {
    return  this.authenticationService.isRole(role);
  }

}
