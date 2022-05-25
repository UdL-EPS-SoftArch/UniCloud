import { HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';
import {User} from '../login-basic/user';
import {UniResource} from '../resource/uni-resource';


@HateoasResource('ratings')
export class Rating extends Resource {
  id: string;
  comment: string;
  rating: number;
  resourceRated: UniResource;
  author: User;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

  // create(rating: Rating) {

  // }
}
