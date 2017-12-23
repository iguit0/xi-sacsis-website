import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { HomePage } from './../home/home';
import { ForgotpasswordPage } from './../forgotpassword/forgotpassword';
import { SignupPage } from './../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;

  constructor(
    public nav: NavController,
    public loadingCtrl: LoadingController
    ) {
    this.main_page = { component: HomePage };

    this.login = new FormGroup({
      email: new FormControl('test@test.com', Validators.required),
      password: new FormControl('test', Validators.required)
    });
  }

  
  doLogin(){
    this.nav.setRoot(this.main_page.component);
  }

  goToForgotPassword(){
    this.nav.push(ForgotpasswordPage);
  }

  goToSignup(){
    this.nav.push(SignupPage);
  }

}
