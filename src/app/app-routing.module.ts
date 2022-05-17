import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UniversityListComponent} from './university/university-list/university-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UniversityDetailComponent} from './university/university-detail/university-detail.component';
import { UniversityEditComponent} from './university/university-edit/university-edit.component';
import { UniversityDeleteComponent} from './university/university-delete/university-delete.component';
import {UniversityCreateComponent} from './university/university-create/university-create.component';
import {LoggedInAdminGuard} from './login-basic/adminLoggedIn.guard';
import { DegreeListComponent} from './degree/degree-list/degree-list.component';
import { DegreeDetailComponent} from './degree/degree-detail/degree-detail.component';
import { DegreeCreateComponent} from './degree/degree-create/degree-create.component';
import { DegreeEditComponent} from './degree/degree-edit/degree-edit.component';
import { DegreeDeleteComponent} from './degree/degree-delete/degree-delete.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent},
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'universities/create', component: UniversityCreateComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'universities/:id', component: UniversityDetailComponent},
  { path: 'universities/:id/delete', component: UniversityDeleteComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'universities/:id/edit', component: UniversityEditComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'universities', component: UniversityListComponent},
  { path: 'degrees', component: DegreeListComponent},
  { path: 'degrees/create', component: DegreeCreateComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'degrees/:id/delete', component: DegreeDeleteComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'degrees/:id/edit', component: DegreeEditComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'degrees/:id', component: DegreeDetailComponent},
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
