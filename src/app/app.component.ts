import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';
import { BnNgIdleService } from 'bn-ng-idle'; 

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,private bnIdle: BnNgIdleService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.bnIdle.startWatching(600).subscribe((res) => {
            if(res) {
            console.log("session expired");
            this.authenticationService.logout();
            this.router.navigate(['/login']);
            }
          })
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}