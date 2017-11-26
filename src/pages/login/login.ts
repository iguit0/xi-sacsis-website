import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild('player') player;
  
    // It's interesting to remove the src and put it back
    // when entering and leaving the page so there are no memory leaks.
    ionViewWillLeave() {
      // the .nativeElement property of the ViewChild is the reference to the tag <video>
      this.player.nativeElement.src = '';
      this.player.nativeElement.load();
    }
  
    ionViewWillEnter() {
      this.player.nativeElement.src = 'assets/video/background-480.mp4';
      this.player.nativeElement.load();
    }
  
    ionViewDidLoad() {
      console.log('Hello LoginBackgroundVideo Page');
    }
  
    goToSignup() {
      console.log('Signup clicked');
    }
  
    goToLogin() {
      console.log('Login clicked');
    }

}
