import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UniversityService} from '../university.service';
import { University } from '../university';
import {OperatorFunction} from 'rxjs';
import {PagedResourceCollection, ResourceCollection} from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-university-search',
  templateUrl: './university-search.component.html',
  styleUrls: ['./university-search.component.css']
})
export class UniversitySearchComponent {
  @Output() emitResults: EventEmitter<University[]> = new EventEmitter();
  public universities: University[] = [];
  searchFailed = false;
  searching = false;

  constructor(private universityService: UniversityService) { }

  write(target: EventTarget): void{
    const text = (target as HTMLTextAreaElement).value;
    console.log(text);
    this.universityService.findByNameContainingOrAcronymContainingOrCountryContainingOrCityContaining(text, text, text, text)
        .subscribe((universities: ResourceCollection<University>) => {
        this.universities = universities.resources;
        console.log(this.universities.toString());
        this.emitResults.emit(this.universities);
      });
  }
}
