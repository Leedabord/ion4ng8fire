import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController} from '@ionic/angular';
import { Tab2aPage } from '../tab2a/tab2a.page';
import { AuthSvc2 } from '../auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public popoverController: PopoverController, 
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Tab2aPage,
      event: ev,
      popoverController: this.popoverController,
      backdropDismiss: true
    });
    return await popover.present();
  }

  goLoginPage(){
    this.router.navigate(["/register"]);
  }


}
