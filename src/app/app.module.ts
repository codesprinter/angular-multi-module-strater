//import { BrowserModule } from '@angular/platform-browser';
//import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseModule } from './layout';
import { AuthenticationModule } from './authentication/authentication.module'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //CommonModule,
    AppRoutingModule,
    AuthenticationModule,
    BaseModule,
    CoreModule
  ],
  exports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
