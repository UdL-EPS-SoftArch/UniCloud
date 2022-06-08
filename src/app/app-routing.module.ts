import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { LoggedInAdminGuard} from './login-basic/adminLoggedIn.guard';
import { AboutComponent } from './about/about.component';
import { RatingCreateComponent } from './rating/rating-create/rating-create.component';
import { RatingDeleteComponent } from './rating/rating-delete/rating-delete.component';
import { RatingModifyComponent } from './rating/rating-modify/rating-modify.component';
import { RatingListComponent} from './rating/rating-list/rating-list.component';
import { RatingDetailComponent} from './rating/rating-detail/rating-detail.component';
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
import { DegreeListComponent} from './degree/degree-list/degree-list.component';
import { DegreeDetailComponent} from './degree/degree-detail/degree-detail.component';
import { DegreeCreateComponent} from './degree/degree-create/degree-create.component';
import { DegreeEditComponent} from './degree/degree-edit/degree-edit.component';
import { DegreeDeleteComponent} from './degree/degree-delete/degree-delete.component';
import {SubjectCreateComponent} from './subject/subject-create/subject-create.component';
import {SubjectListComponent} from './subject/subject-list/subject-list.component';
import {SubjectDetailComponent} from './subject/subject-detail/subject-detail.component';
import {SubjectEditComponent} from './subject/subject-edit/subject-edit.component';
import {SubjectDeleteComponent} from './subject/subject-delete/subject-delete.component';
import {ResourceCreateComponent} from './resource/resource-create/resource-create.component';
import {ResourceDetailComponent} from './resource/resource-detail/resource-detail.component';
import {ResourceDeleteComponent} from './resource/resource-delete/resource-delete.component';
import {ResourceListComponent} from './resource/resource-list/resource-list.component';
import {ResourceEditComponent} from './resource/resource-edit/resource-edit.component';


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
  { path: 'universities?search=', component: UniversityListComponent, canActivate: [LoggedInAdminGuard]},
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
  { path: 'degrees', component: DegreeListComponent},
  { path: 'degrees/create', component: DegreeCreateComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'degrees/:id/delete', component: DegreeDeleteComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'degrees/:id/edit', component: DegreeEditComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'degrees/:id', component: DegreeDetailComponent},
  { path: 'about', component: AboutComponent},
  { path: 'ratings/create', component: RatingCreateComponent},
  { path: 'ratings/:id/delete', component: RatingDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'ratings/:id/edit', component: RatingModifyComponent, canActivate: [LoggedInGuard]},
  { path: 'ratings/:id', component: RatingDetailComponent},
  { path: 'ratings', component: RatingListComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},

  { path: 'subjects', component: SubjectListComponent},
  { path: 'subjects/create', component: SubjectCreateComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'subjects/:id', component: SubjectDetailComponent},
  { path: 'subjects/:id/edit', component: SubjectEditComponent, canActivate: [LoggedInAdminGuard]},
  { path: 'subjects/:id/delete', component: SubjectDeleteComponent, canActivate: [LoggedInAdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
