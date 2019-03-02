import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services';
import { LoginRequest } from '../../models';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService
    , private router: Router
    , private route: ActivatedRoute,) { }

  loginForm: FormGroup;
  userName: FormControl;
  passord: FormControl;
  returnUrl: string;

  ngOnInit() {
      this.userName = new FormControl();
      this.passord = new FormControl();
      this.loginForm = new FormGroup({
          userName: this.userName,
          password: this.passord
     });
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onLoginFormSubmit(){
      this.authService.login(this.loginForm.value)
      .subscribe(
          response => {
              if(response.status == "OK"){
                  this.router.navigate([this.returnUrl]);
              }
          },
          error => {
              console.log(error);
          }
          
      );
  }
 
}
