import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HateoasResourceOperation, PagedResourceCollection, ResourceCollection} from '@lagoshny/ngx-hateoas-client';
import { Degree } from './degree';
import {University} from '../university/university';


@Injectable({
  providedIn: 'root'
})
export class DegreeService extends HateoasResourceOperation<Degree> {

  constructor() {
    super(Degree);
  }

  public findByFaculty(query: string): Observable<ResourceCollection<Degree>>{
    return this.searchCollection('findByFaculty', { params: { text: query } });
  }
  public findByFacultyContaining(query: string): Observable<ResourceCollection<Degree>>{
    return this.searchCollection('findByFacultyContaining', { params: { text: query } });
  }
  public findByName(query: string): Observable<ResourceCollection<Degree>>{
    return this.searchCollection('findByName', { params: { text: query } });
  }
  public findByNameContaining(query: string): Observable<ResourceCollection<Degree>>{
    return this.searchCollection('findByNameContaining', { params: { text: query } });
  }
  public findByUniversityName(query: string): Observable<ResourceCollection<Degree>>{
    return this.searchCollection('findByUniversityName', { params: { text: query } });
  }
  public findByUniversityNameContaining(query: string): Observable<ResourceCollection<Degree>>{
    return this.searchCollection('findByUniversityNameContaining', { params: { text: query } });
  }

  public findByUniversity(query: University): Observable<ResourceCollection<Degree>>{
    return this.searchCollection('findByUniversity', { params: { text: query } } );
  }
  // tslint:disable-next-line:max-line-length
  public findByNameContainingOrFacultyContainingOrUniversityNameContaining(name: string, faculty: string, uniName: string, size: number): Observable<PagedResourceCollection<Degree>> {
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    return this.searchPage('findByNameContainingOrFacultyContainingOrUniversityNameContaining', { params: { name, faculty, uniName}, pageParams: { size }, sort: {name: 'ASC'}});
  }
}
