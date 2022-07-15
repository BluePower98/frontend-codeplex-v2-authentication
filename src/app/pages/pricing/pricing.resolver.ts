import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { FuseSplashScreenService } from "@fuse/services/splash-screen";
import { PlanService } from "@services/api/plan/plan.service";
import { finalize, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PricingResolver implements Resolve<any> {

    constructor(
        private planService: PlanService,
        private fuseSplashScreenService: FuseSplashScreenService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.fuseSplashScreenService.show();

        return this.planService.getPlans()
            .pipe(
                map(res => {
                    res.forEach((item: any) => {   
                        const planes: Array<any> = item.planes;
            
                        item.planes = planes.map(element => {
                        return {
                            ...element,
                            idplandetalle: element.detalle[0].idplandetalle,
                            precio: element.detalle[0].precio,
                        }
                        });      
                    });
                    
                    return res;
                }),
                finalize(() => setTimeout(() => this.fuseSplashScreenService.hide(), 0))
            );
    }
}