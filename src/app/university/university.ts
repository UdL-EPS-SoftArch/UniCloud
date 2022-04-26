import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('universities')
export class University extends Resource{
  id: string;
  name: string;
  acronym: string;
  country: string;
  city: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

}
