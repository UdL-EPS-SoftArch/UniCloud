import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from './student';
import {HateoasResourceOperation, ResourceCollection} from '@lagoshny/ngx-hateoas-client';


@Injectable()
export class StudentService extends HateoasResourceOperation<Student>{
  constructor() {
    super(Student);
  }

  public findByUsernameContaining(text: string): Observable<ResourceCollection<Student>>{
    const options: any = {params: [{key: 'text', value: text}]};
    return this.searchCollection('findByUsernameContaining', options);
  }
}
