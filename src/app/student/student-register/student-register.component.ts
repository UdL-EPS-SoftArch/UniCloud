import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html'
})

export class StudentRegisterComponent implements OnInit{
  public student: Student;

  constructor(private router: Router,
              private location: Location,
              private studentService: StudentService,
              private authenticationBasicService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    this.student = new Student();
  }

  onSubmit(): void {
    this.student.username = this.student.id;
    this.studentService.createResource({body: this.student}).subscribe(
      () => {
        this.authenticationBasicService.login(this.student.id, this.student.password).subscribe(
          (student: Student) => this.router.navigate(['student', student.id]));
      });
  }

  onCancel(): void {
    this.location.back();
  }

}
