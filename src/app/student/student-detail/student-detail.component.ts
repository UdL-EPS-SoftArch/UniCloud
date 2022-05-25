import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {Admin} from '../../admin/admin';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
})
export class StudentDetailComponent implements OnInit {
  public student: Student = new Student();
  public admin: Admin = new Admin();

  constructor(private route: ActivatedRoute,
              private studentService: StudentService,
              private authenticationService: AuthenticationBasicService) {
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getResource(id).subscribe(
      student => {
        this.student = student;
      });
  }

  getCurrentUser(): Student {
    return this.authenticationService.getCurrentUser();
  }


  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
