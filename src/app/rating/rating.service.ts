import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Rating } from './rating';
// import {UniResource} from "../resource/uni-resource";

@Injectable({providedIn: 'root'})
export class RatingService extends HateoasResourceOperation<Rating> {

  private apiUrl = 'http://localhost:8080/resources';

  constructor() {
    super(Rating);
  }

  public findByRatingGreaterThan(query: number): Observable<ResourceCollection<Rating>> {
    return this.searchCollection('findByRatingGreaterThan', { params: { rating: query }});

  }

  // public getResourcesDefault(url: string): [UniResource]{
    // return ;
// }
}
