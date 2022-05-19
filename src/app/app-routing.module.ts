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
import {ResourceCreateComponent} from './resource/resource-create/resource-create.component';
import {ResourceDetailComponent} from './resource/resource-detail/resource-detail.component';
import {ResourceDeleteComponent} from './resource/resource-delete/resource-delete.component';
import {ResourceListComponent} from './resource/resource-list/resource-list.component';
import {ResourceEditComponent} from './resource/resource-edit/resource-edit.component';
import {LoggedInAdminGuard} from './login-basic/adminLoggedIn.guard';

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
  { path: 'resources/create', component: ResourceCreateComponent, canActivate: [LoggedInGuard]},
  { path: 'resources/:id', component: ResourceDetailComponent },
  { path: 'resources/:id/delete', component: ResourceDeleteComponent },
  { path: 'resources/:id/edit', component: ResourceEditComponent, canActivate: [LoggedInGuard]},
  { path: 'resources', component: ResourceListComponent },
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
