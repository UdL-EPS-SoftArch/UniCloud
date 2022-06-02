import { Component, EventEmitter, Output } from '@angular/core';
import {Subject} from '../subject';
import {SubjectService} from '../subject.service';
import {Observable} from 'rxjs/internal/Observable';
import {ResourceCollection} from '@lagoshny/ngx-hateoas-client';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {of, OperatorFunction} from 'rxjs';

@Component({
  selector: 'app-subject-search',
  templateUrl: './subject-search.component.html',
  styleUrls: ['./subject-search.component.css']
})
export class SubjectSearchComponent {
  @Output() emitResults: EventEmitter<Subject> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private subjectService: SubjectService) {
  }

  autocomplete: OperatorFunction<string, readonly Subject[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.subjectService.findByName(term).pipe(
          map((collection: ResourceCollection<Subject>) => collection.resources),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => this.searching = false )
    )

  select(item: any): void {
    this.emitResults.emit(item as Subject);
  }

}
