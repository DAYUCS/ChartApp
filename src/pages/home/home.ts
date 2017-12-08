import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tapCounter: number = 0;
  constructor(public navCtrl: NavController) {
  }

  buttonTapped() {
    this.tapCounter++;
  }

  reset() {
      this.tapCounter = 0;
  }

}
