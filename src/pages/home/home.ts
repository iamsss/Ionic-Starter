
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, PopoverController} from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public modalCtrl : ModalController,
    public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToDemoPage(){
    this.navCtrl.push('DemoPage', {
      message:'Hello From Home Page'
    });
  }
  goToActionSheetPage(){
    this.navCtrl.push('ActionsheetPage');
  }
  goToAlertPage() {
    this.navCtrl.push('AlertPage');
  }
  goToButtonPage() {
    this.navCtrl.push('ButtonPage');
  }
  goToLoadingPage() {
    this.navCtrl.push('LoadingPage');
  }
   openModal(){
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('ModalPage',data);
    modalPage.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.present({
      ev: myEvent
    });
  }
}
