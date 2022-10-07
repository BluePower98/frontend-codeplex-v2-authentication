import { Injectable } from '@angular/core';
import { UserService } from "@services/api/user/user.service";
import { NavigationService } from "@core/navigation/navigation.service";

import { FuseSplashScreenService } from "@fuse/services/splash-screen";
import { ErrorHandler, HttpErrorHandlerService } from "@core/services/http-error-handler.service";
import { catchError } from 'rxjs/operators';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataResolver implements Resolve<any> {

  constructor(
     private router: Router,
     private userService: UserService,
     private navigationService: NavigationService,
     private fuseSplashScreenService: FuseSplashScreenService,
     private httpErrorHandlerService: HttpErrorHandlerService
  ){

  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (!sessionStorage.getItem("idusuario")){
        return this.router.navigate(['/unauthorized']);
    }

    const userId= sessionStorage.getItem('idusuario');
    this.fuseSplashScreenService.show();

    this.httpErrorHandlerService.setHandler(ErrorHandler.manual);

    return forkJoin([
      this.navigationService.getModule(userId)
    ]).pipe(
            catchError(() => {
                return this.router.navigate(['/unauthorized']);
            }),
            finalize(() => {
                this.httpErrorHandlerService.setHandler(ErrorHandler.automatic);
                setTimeout(() => this.fuseSplashScreenService.hide(), 0)
            })
        )

  }
}
