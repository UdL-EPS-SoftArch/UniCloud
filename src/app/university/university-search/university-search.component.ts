import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UniversityService} from '../university.service';
import { University } from '../university';
import {OperatorFunction} from 'rxjs';

@Component({
  selector: 'app-university-search',
  templateUrl: './university-search.component.html',
  styleUrls: ['./university-search.component.css']
})
export class UniversitySearchComponent {
  @Output() emitResults: EventEmitter<University> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private universityService: UniversityService) { }

}
