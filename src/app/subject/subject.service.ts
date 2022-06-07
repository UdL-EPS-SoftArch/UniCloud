import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HateoasResourceOperation, PagedResourceCollection, ResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {Subject} from './subject';


@Injectable({
  providedIn: 'root'
})

export class SubjectService extends HateoasResourceOperation<Subject>{

  constructor() {
    super(Subject);
  }

  public findByName(query: string): Observable<ResourceCollection<Subject>>{
    return this.searchCollection('findByName', {params: {name: query}});
  }
  public findByCourse(query: number): Observable<ResourceCollection<Subject>>{
    return this.searchCollection('findByCourse', {params: {course: query}});
  }

  public findByNameContaining(query: string): Observable<ResourceCollection<Subject>>{
    return this.searchCollection('findByNameContaining', {params: {name: query}});
  }

  // tslint:disable-next-line:max-line-length
  public findByNameContainingOrCourseContainingOrOptionalContaining(name: string, course: string, optional: string, size: number): Observable<PagedResourceCollection<Subject>> {
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    return this.searchPage('findByNameContainingOrCourseContainingOrOptionalContaining', { params: { name, course, optional}, pageParams: { size }, sort: {name: 'ASC'}});
    }
}
