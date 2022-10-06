import { Component, OnInit } from '@angular/core';

import { Navigation } from 'app/core/navigation/navigation.types';
import { User } from 'app/core/user/user.types';
import { Subject } from 'rxjs';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { AuthService } from '@core/services/auth/auth.service';


@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

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

  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUserDataFromStorage();
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
}
