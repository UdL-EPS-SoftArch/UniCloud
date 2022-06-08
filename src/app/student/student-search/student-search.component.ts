import { Component, EventEmitter, Output } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {Observable, of } from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {ResourceCollection} from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
})
export class StudentSearchComponent {
  @Output() emitResults: EventEmitter<Student> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private studentService: StudentService) {
  }
  search(): (text$: Observable<string>) => Observable<Student[]> {
    return (text$: Observable<string>) => text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.studentService.findByUsernameContaining(term).pipe(
          map((collection: ResourceCollection<Student>) => collection.resources),
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => this.searching = false)
    );
  }

  select(item: any): void {
    this.emitResults.emit(item as Student);
  }
}
