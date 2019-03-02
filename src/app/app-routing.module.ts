import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './layout/components';
import { LoginComponent } from './authentication/components'
import { AppRouterLink } from './core/constants'
import { AuthGuard } from './authentication/gaurds';

const appRoutes: Routes = [
    {
        path: AppRouterLink.LOGIN,
        component: LoginComponent
      },
    {
        path: AppRouterLink.HOME,
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {path: '', redirectTo: `/${AppRouterLink.HOME}`, pathMatch: 'full'},
    {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        //preloadingStrategy: SelectivePreloadingStrategy,

      },
    ),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    //SelectivePreloadingStrategy,
  ],
})
export class AppRoutingModule {
}
