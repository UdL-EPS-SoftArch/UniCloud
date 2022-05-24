import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import {StudentService} from '../student.service';
import {Student} from '../student';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
})
export class StudentDeleteComponent implements OnInit {

  public student: Student = new Student();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.studentService.getResource(this.id).subscribe(
      student => this.student = student);
  }

  delete(): void{
    this.studentService.deleteResource(this.student).subscribe(
      () => {
        this.authenticationService.logout();
        this.router.navigate(['']);
      });
  }

}
