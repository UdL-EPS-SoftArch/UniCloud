import { Component, OnInit } from '@angular/core';
import {Subject} from '../subject';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../subject.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
  public subject: Subject = new Subject();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subjectService.getResource(id).subscribe(
      (subject: Subject) => this.subject = subject) ;
  }
  onSubmit(): void {
    this.subjectService.patchResource(this.subject).subscribe(
      (patchedSubject: Subject) => {
        this.router.navigate(['subjects', patchedSubject.id]);
      });
  }
  getCurrentSubjectID(): string {
    return this.subject.id;
  }

}
