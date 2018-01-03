import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingProvider } from '../../providers/loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingProvider) {
        this.loadingCtrl.presentWithGif1(); 
	setTimeout(() => { 
	   this.loadingCtrl.dismiss().then(() => {
	      this.loadingCtrl.presentWithGif2();  
   	      setTimeout(() => { 
	         this.loadingCtrl.dismiss().then(() => {
   		    this.loadingCtrl.presentWithMessage('Carregando');  
	            setTimeout(() => { 
		       this.loadingCtrl.dismiss().then(() => {}); 
		    }, 5000);								
		 }); 
	      }, 5000);
           }); 
	}, 5000);				 					       
  }  
}
