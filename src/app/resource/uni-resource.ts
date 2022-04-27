import { HateoasResource, Resource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('users')
export class UniResource extends Resource {
  id: bigint;
  name: string;
  description: string;
  file: string;
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
