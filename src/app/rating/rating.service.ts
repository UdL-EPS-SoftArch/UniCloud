import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Rating } from './rating';

@Injectable({providedIn: 'root'})
export class RatingService extends HateoasResourceOperation<Rating> {

  constructor() {
    super(Rating);
  }

  public findByRatingGreaterThan(query: number): Observable<ResourceCollection<Rating>> {
    return this.searchCollection('findByRatingGreaterThan', { params: { rating: query }});

  }
}
