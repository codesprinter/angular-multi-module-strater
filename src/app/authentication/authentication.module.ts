import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginComponent } from './components';
import { SignupComponent } from './components';
import { AuthenticationService } from './services';
import { ReactiveFormsModule } from '@angular/forms'
import {HeaderInterceptor } from './interceptors'
import { from } from 'rxjs';
import { AuthGuard } from './gaurds';


// const appRoutes: Routes = [
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'signup',
//     component: SignupComponent
//   },
//   {path: '', redirectTo: '/login', pathMatch: 'full'},
//   {path: '**', component: LoginComponent},
// ];

@NgModule({
  imports: [
    ReactiveFormsModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   {
    //     enableTracing: true, // <-- debugging purposes only
    //   },
    // ),
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    AuthenticationService, AuthGuard
  ],
})
export class AuthenticationModule {
}
