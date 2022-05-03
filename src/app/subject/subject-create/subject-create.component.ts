import { Component, OnInit } from '@angular/core';
import {Subject} from '../subject';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {
  public subject: Subject;

  constructor() { }

  ngOnInit(): void {
    this.subject = new Subject();
  }

}
