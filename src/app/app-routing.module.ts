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
import {StudentRegisterComponent} from './student/student-register/student-register.component';
import {StudentDeleteComponent} from './student/student-delete/student-delete.component';
import {StudentEditComponent} from './student/student-edit/student-edit.component';
import {StudentDetailComponent} from './student/student-detail/student-detail.component';
import {StudentListComponent} from './student/student-list/student-list.component';
import {AdminRegisterComponent} from './admin/admin-register/admin-register.component';
import {AdminDeleteComponent} from './admin/admin-delete/admin-delete.component';
import {AdminEditComponent} from './admin/admin-edit/admin-edit.component';
import {AdminDetailComponent} from './admin/admin-detail/admin-detail.component';
import {AdminListComponent} from './admin/admin-list/admin-list.component';

const routes: Routes = [
  { path: 'admins/create', component: AdminRegisterComponent},
  { path: 'admins/:id/delete', component: AdminDeleteComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'admins/:id/edit', component: AdminEditComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'admins/:id', component: AdminDetailComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'admins', component: AdminListComponent, canActivate: [LoggedInAdminGuard]},

  { path: 'students/create', component: StudentRegisterComponent},
  { path: 'students/:id/delete', component: StudentDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'students/:id/edit', component: StudentEditComponent, canActivate: [LoggedInGuard]},
  { path: 'students/:id', component: StudentDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'students', component: StudentListComponent, canActivate: [LoggedInGuard]},

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
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
