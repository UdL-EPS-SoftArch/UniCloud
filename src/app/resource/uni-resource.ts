import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('resources')
export class UniResource extends Resource {
  id: string;
  name: string;
  description: string;
  file: string | ArrayBuffer;
  resourceType: ResourceType;
  // owner: Student;
  // subjects: Subject[] = []

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

}

enum ResourceType {
  assignment,
  test,
  note
}
