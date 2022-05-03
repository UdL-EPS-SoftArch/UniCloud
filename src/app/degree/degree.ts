import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';
// import { University } from '../.university/university';

@HateoasResource('degrees')
export class Degree extends Resource{
  id: string;
  name: string;
  faculty: string;
  // university: University;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

}
