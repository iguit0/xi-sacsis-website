import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signup: FormGroup;
  main_page: { component: any };
  loading: any;

  constructor(
    public nav: NavController,
    public modal: ModalController,
  ) {
    this.main_page = { component: LoginPage };

    this.signup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('test', Validators.required),
      confirm_password: new FormControl('test', Validators.required)
    });
    }


  doSignup(){
    this.nav.setRoot(this.main_page.component);
  }


  showTermsModal() {
    //let modal = this.modal.create(TermsOfServicePage);
   // modal.present();
  }

  showPrivacyModal() {
    //let modal = this.modal.create(PrivacyPolicyPage);
    //modal.present();
  }

}
