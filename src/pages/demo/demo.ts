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

  ionViewWillEnter() {
    
    console.log('ionViewWillEnter is fired just as the page is about to become active');
    alert('Ion ViewWillEnter Fire');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter fire each time the page entered');
    alert('IonViewDidEnter')
  }

  ionViewDidLeave() {
    console.log('Fire when user leave the page');
    alert('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('this will run when page is about to destroy')
    alert('ionViewWillUnload');
    // Used to unsuscribe observable
    // Prevent memory leak
  }

}
