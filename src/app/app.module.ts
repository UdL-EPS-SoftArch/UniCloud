import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxHateoasClientConfigurationService, NgxHateoasClientModule} from '@lagoshny/ngx-hateoas-client';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './error-handler/error-alert/not-found.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserDeleteComponent} from './user/user-delete/user-delete.component';
import {UserSearchComponent} from './user/user-search/user-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbCollapseModule, NgbDropdownModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginBasicModule} from './login-basic/login-basic.module';
import {ErrorHandlerModule} from './error-handler/error-handler.module';
import {AuthInterceptor} from './login-basic/auth-interceptor';
import {HttpErrorInterceptor} from './error-handler/http-error-interceptor';
import {AuthenticationBasicService} from './login-basic/authentication-basic.service';
import {LoggedInGuard} from './login-basic/loggedin.guard';
import {UserService} from './user/user.service';
import { UniversityEditComponent } from './university/university-edit/university-edit.component';
import { UniversityCreateComponent } from './university/university-create/university-create.component';
import { UniversitySearchComponent } from './university/university-search/university-search.component';
import { UniversityListComponent } from './university/university-list/university-list.component';
import {UniversityDetailComponent} from './university/university-detail/university-detail.component';
import {UniversityDeleteComponent} from './university/university-delete/university-delete.component';
import {LoggedInAdminGuard} from './login-basic/adminLoggedIn.guard';
import {LoggedInStudentGuard} from './login-basic/studentLoggedIn.guard';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminSearchComponent } from './admin/admin-search/admin-search.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    NotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserSearchComponent,
    UniversityEditComponent,
    UniversityCreateComponent,
    UniversitySearchComponent,
    UniversityListComponent,
    UniversityDetailComponent,
    UniversityDeleteComponent,
    UserSearchComponent,
    AdminDeleteComponent,
    AdminDetailComponent,
    AdminRegisterComponent,
    AdminEditComponent,
    AdminListComponent,
    AdminSearchComponent,
    StudentDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxHateoasClientModule.forRoot(),
    LoginBasicModule,
    ErrorHandlerModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    AuthenticationBasicService, LoggedInGuard, LoggedInAdminGuard, LoggedInStudentGuard, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(hateoasConfig: NgxHateoasClientConfigurationService) {
    hateoasConfig.configure({
      http: {
        rootUrl: environment.API
      }
    });
  }
}
