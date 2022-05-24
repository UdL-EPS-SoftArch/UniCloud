import { Injectable } from '@angular/core';
import {HateoasResourceOperation, PagedResourceCollection, ResourceCollection} from '@lagoshny/ngx-hateoas-client';
import {UniResource} from './uni-resource';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class UniResourceService extends HateoasResourceOperation<UniResource> {

  constructor() {
    super(UniResource);
  }

  public findByName(query: string): Observable<ResourceCollection<UniResource>> {
    return this.searchCollection('findByName', { params: { name: query }});
  }

  public findByNameContaining(query: string): Observable<ResourceCollection<UniResource>> {
    return this.searchCollection('findByNameContaining', { params: { name: query } });
  }

  public findBySubjectsName(query: string): Observable<ResourceCollection<UniResource>> {
    return this.searchCollection('findBySubjectsName', { params: { name: query }});
  }

  public findBySubjectsNameContaining(query: string): Observable<ResourceCollection<UniResource>> {
    return this.searchCollection('findBySubjectsNameContaining', { params: { name: query } });
  }

  // tslint:disable-next-line:max-line-length
  public findByNameContainingOrSubjectsNameContaining(name: string, subjectsName: string, size: number): Observable<PagedResourceCollection<UniResource>> {
    // tslint:disable-next-line:max-line-length
      return this.searchPage('findByNameContainingOrSubjectsNameContaining', { params: { name, subjectsName}, pageParams: { size }, sort: {name: 'ASC'}});
  }
}
