import { Component, OnInit } from '@angular/core';

import { Navigation } from 'app/core/navigation/navigation.types';
import { User } from 'app/core/user/user.types';
import { Subject } from 'rxjs';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { AuthService } from '@core/services/auth/auth.service';
import { NavigationService } from '@core/navigation/navigation.service';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isScreenSmall: boolean;
  navigation: Navigation = {
      default: []
  };
  user: User;
  moduleTitle: string;

  private componentDestroyed$: Subject<boolean> = new Subject<boolean>();


  constructor(
    private fuseNavigationService: FuseNavigationService,
    private authService: AuthService,
    private navigationService: NavigationService,

  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUserDataFromStorage();

    this.navigationService.navigation$
    .pipe(
        takeUntil(this.componentDestroyed$),
    )
    .subscribe(navigation => {
        this.navigation = navigation;
        this.settingModuleTitle();
    });


  }

  get currentYear(): number {
      return new Date().getFullYear();
  }

  toggleNavigation(name: string): void {
      const navigation = this.fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

      if (navigation) {
          navigation.toggle();
      }
  }

  private settingModuleTitle() {
        let children = [];

        this.navigation.default.forEach(item => {
            children = [...children, ...item.children];
        }); 

        const pathName = window.location.pathname;
        this.moduleTitle = children.find(child => {
            return child.link === pathName || child.link === decodeURIComponent(pathName);
        })?.title;
    }
}
