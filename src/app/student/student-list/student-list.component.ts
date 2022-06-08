import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { PagedResourceCollection } from '@lagoshny/ngx-hateoas-client';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {
  public students: Student[] = [];
  public pageSize = 5;
  public page = 1;
  public totalStudents = 0;

  constructor(
    public router: Router,
    private studentService: StudentService,
    private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.studentService.getPage({ pageParams:  { size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Student>) => {
        this.students = page.resources;
        this.totalStudents = page.totalElements;
      });
  }

  changePage(): void {
    this.studentService.getPage({ pageParams: { page: this.page - 1, size: this.pageSize }, sort: { username: 'ASC' } }).subscribe(
      (page: PagedResourceCollection<Student>) => this.students = page.resources);
  }

  detail(student: Student): void {
    this.router.navigate(['students', student.id]);
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
