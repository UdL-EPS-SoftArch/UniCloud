import { Injectable } from '@angular/core';
import {HateoasResourceOperation} from '@lagoshny/ngx-hateoas-client';
import {UniResource} from './uni-resource';

@Injectable({providedIn: 'root'})
export class UniResourceService extends HateoasResourceOperation<UniResource> {

  constructor() {
    super(UniResource);
  }
}
