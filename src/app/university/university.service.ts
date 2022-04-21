import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { University } from './university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService extends HateoasResourceOperation<University>{

  constructor() {
    super(University);
  }

  public findByName(query: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByName', { params: { text: query } });
  }

  public findByCountry(query: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByCountry', { params: { text: query } });
  }

  public findByCity(query: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByCity', { params: { text: query } });
  }

  public findByAcronym(query: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByAcronym', { params: { text: query } });
  }

  public findByNameContaining(query: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByNameContaining', { params: { text: query } });
  }
}
