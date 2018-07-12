import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {

  message = 'Default message';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.message = this.navParams.get('message');
    
   
  }

  ionViewDidLoad() { 
    // This event fire only once on intial loaing 
    alert('Ion ViewDidLoad');
    console.log('ionViewDidLoad fire once when page load');
  }

}
