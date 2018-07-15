
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a your name ?",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },{
          name: 'section',
          placeholder: 'Section'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Your name is ', data.name);
          }
        }
      ]
    });
    prompt.present();
  }

}
