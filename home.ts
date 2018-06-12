import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  calculator(number) {
    var save=document.calculator.viewer.value;
    document.calculator.viewer.value=save+number;
  }

  clear() {
    document.calculator.viewer.value='';
  }

  calculating () {
    var result=0;
    result=document.calculator.viewer.value;

    document.calculator.viewer.value='';

    document.calculator.viewer.value=eval(result);
  }

}
