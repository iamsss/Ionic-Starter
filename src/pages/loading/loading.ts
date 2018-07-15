import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

   

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait for 3 second...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  presentHideSpinnerLoading() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Please wait for 3 second...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  presentBubblesSpinnerLoading() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Please wait for 3 second...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }

  presentLoadingCustom() {
   
  var loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 5000
    });
   loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
   loading.present();

    setTimeout(() => {
     loading.dismiss();
    }, 3000);
  }

}
