import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import {User} from '../login-basic/user';


@HateoasResource('ratings')
export class Rating extends Resource {
  id: string;
  comment: string;
  rating: number;
  resourceRated: Resource;
  author: User;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

  // create(rating: Rating) {

  // }
}
