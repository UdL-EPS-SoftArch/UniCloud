import { Component, EventEmitter, Output } from '@angular/core';
import {AdminService} from '../admin.service';
import {Admin} from '../admin';
import {Observable, of } from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {ResourceCollection} from '@lagoshny/ngx-hateoas-client';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
})
export class AdminSearchComponent {
  @Output() emitResults: EventEmitter<Admin> = new EventEmitter();
  searchFailed = false;
  searching = false;

  constructor(private adminService: AdminService) {
  }
  search(): (text$: Observable<string>) => Observable<Admin[]> {
    return (text$: Observable<string>) => text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => term.length < 3 ? of([]) :
        this.adminService.findByUsernameContaining(term).pipe(
          map((collection: ResourceCollection<Admin>) => collection.resources),
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
    this.emitResults.emit(item as Admin);
  }
}
