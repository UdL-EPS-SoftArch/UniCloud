import {User} from '../login-basic/user';
import { HateoasResource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('students')
export class Student extends User {}
