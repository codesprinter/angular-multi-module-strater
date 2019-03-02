import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './services/user/user.component';

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
