import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SubjectService} from '../subject.service';
import { Subject} from '../subject';
import { Location} from '@angular/common';


@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {
  public subject: Subject;

  constructor(private router: Router,
              private location: Location,
              private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.subject = new Subject();
  }

  onSubmit(): void {
    this.subjectService.createResource( {body: this.subject}).subscribe((subject: Subject) => this.router.
    navigate(['subjects', subject.id]));
  }

  onCancel(): void {
    this.location.back();
  }

}
