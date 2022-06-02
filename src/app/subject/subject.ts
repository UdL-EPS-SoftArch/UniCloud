import { HateoasResource, Resource} from '@lagoshny/ngx-hateoas-client';

@HateoasResource('subjects')
export class Subject extends Resource{
  id: string;
  name: string;
  course: number;
  optional: boolean;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }
}
