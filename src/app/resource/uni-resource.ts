import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
import {User} from '../login-basic/user';

@HateoasResource('resources')
export class UniResource extends Resource {
  uri: string;
  name: string;
  description: string;
  file: string | ArrayBuffer;
  resourceType: string;
  owner: User;
  // subjects: Subject[] = []

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

}
