import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxHateoasClientConfigurationService, NgxHateoasClientModule} from '@lagoshny/ngx-hateoas-client';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
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
import { RatingCreateComponent } from './rating/rating-create/rating-create.component';
import { RatingDeleteComponent } from './rating/rating-delete/rating-delete.component';
import { RatingModifyComponent } from './rating/rating-modify/rating-modify.component';
import { ResourceCreateComponent } from './resource/resource-create/resource-create.component';
import { UniversityEditComponent } from './university/university-edit/university-edit.component';
import { UniversityCreateComponent } from './university/university-create/university-create.component';
import { UniversitySearchComponent } from './university/university-search/university-search.component';
import { UniversityListComponent } from './university/university-list/university-list.component';
import {UniversityDetailComponent} from './university/university-detail/university-detail.component';
import {UniversityDeleteComponent} from './university/university-delete/university-delete.component';
import {LoggedInAdminGuard} from './login-basic/adminLoggedIn.guard';
import {LoggedInStudentGuard} from './login-basic/studentLoggedIn.guard';
import {ResourceDetailComponent} from './resource/resource-detail/resource-detail.component';
import { ResourceDeleteComponent } from './resource/resource-delete/resource-delete.component';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';
import { ResourceSearchComponent } from './resource/resource-search/resource-search.component';
import { ResourceEditComponent } from './resource/resource-edit/resource-edit.component';
import {RatingDetailComponent} from './rating/rating-detail/rating-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    RatingCreateComponent,
    RatingDeleteComponent,
    RatingModifyComponent,
    NotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserSearchComponent,
    ResourceCreateComponent,
    UniversityEditComponent,
    UniversityCreateComponent,
    UniversityListComponent,
    UniversitySearchComponent,
    UniversityDetailComponent,
    UniversityDeleteComponent,
    ResourceDetailComponent,
    ResourceDeleteComponent,
    ResourceEditComponent,
    ResourceListComponent,
    ResourceSearchComponent,
    RatingDetailComponent
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
