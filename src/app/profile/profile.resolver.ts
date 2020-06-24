import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthSvc } from '../firebase-auth.service';

@Injectable()
export class ProfilePageResolver implements Resolve<any> {

  constructor(private firebaseAuthService: AuthSvc) {}

  resolve() {
    return this.firebaseAuthService.getProfileData();
  }
}
