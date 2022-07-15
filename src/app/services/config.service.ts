import { Injectable } from "@angular/core";
import { MenuOptions } from "@constants/menu-options.constant";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    private currentVideosByMenu$ = new BehaviorSubject<any>([]);
    private modeOpenMenuOptions: MenuOptions= MenuOptions.normal;

    constructor() {

    }

    setCurrentVideosByMenu(videos: any[]) {
        this.currentVideosByMenu$.next(videos);
    }
    
    getCurrentVideosByMenu() {
        return this.currentVideosByMenu$;
    }


    setModeOpenMenuOptions(mode: MenuOptions) {
        this.modeOpenMenuOptions = mode;
    }

    getModeOpenMenuOptions(): MenuOptions {
        return this.modeOpenMenuOptions;
    }

}