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
    return this.searchCollection('findByName', { params: { name: query } });
  }

  public findByCountry(query: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByCountry', { params: { country: query } });
  }

  public findByCity(query: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByCity', { params: { city: query } });
  }

  public findByAcronym(query: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByAcronym', { params: { acronym: query } });
  }

  public findByNameContaining(query: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByNameContaining', { params: { name: query } });
  }

  // tslint:disable-next-line:max-line-length
  public findByNameContainingOrAcronymContainingOrCountryContainingOrCityContaining(name: string, acronym: string, country: string, city: string): Observable<ResourceCollection<University>> {
    return this.searchCollection('findByNameContainingOrAcronymContainingOrCountryContainingOrCityContaining', { params: { name, acronym, country, city}});
  }
}
