import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HateoasResourceOperation, ResourceCollection} from '@lagoshny/ngx-hateoas-client';
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
}
