import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() emitResults: EventEmitter<PagedResourceCollection<University>> = new EventEmitter();
  public universitiesPagedResource: PagedResourceCollection<University>;
  searchFailed = false;
  searching = false;
  @Input() pageSize: number;

  constructor(private universityService: UniversityService) { }

  write(target: EventTarget): void{
    const text = (target as HTMLTextAreaElement).value;
    this.universityService.findByNameContainingOrAcronymContainingOrCountryContainingOrCityContaining(text, text, text, text, this.pageSize)
        .subscribe((universities: PagedResourceCollection<University>) => {
          this.universitiesPagedResource = universities;
          this.emitResults.emit(this.universitiesPagedResource);
      });
  }
}
