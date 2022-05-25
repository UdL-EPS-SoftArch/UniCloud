import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
})
export class StudentEditComponent implements OnInit {
  public student: Student = new Student();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getResource(id).subscribe(
      (student: Student) => this.student = student);
  }

  onSubmit(): void {
    this.student.password = this.student.passwordReset ? this.student.password : undefined;
    this.studentService.patchResource(this.student).subscribe(
      (patchedStudent: Student) => {
        if (this.student.passwordReset){
          this.authenticationService.logout();
          this.authenticationService.login(this.student.id, this.student.password).subscribe(
            (student: Student) => this.router.navigate(['student', student.id]));
        } else {
          this.router.navigate(['student', patchedStudent.id]);
        }
      });
  }
  getCurrentUsername(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
