import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import * as moment from 'moment';
import { environment } from "@environments/environment";

const url_modulo=environment.subdomains;

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.scss']
})
export class SelectModuleComponent implements OnInit {


  modules: any[] = [
    {
      title: 'Logística.Net',
      image: 'assets/images/cards/01-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: 'http://localhost:4300',
      moduleId: 2,
      planId: 8,
      active: true
    },
    {
      title: 'Sicovi.Net',
      image: 'assets/images/cards/06-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: '',
      moduleId: 1,
      planId: 1,
      active: true
    },
    {
      title: 'Facturación Electrónica',
      image: 'assets/images/cards/10-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: '',
      moduleId: 3,
      planId: 10,
      active: true
    },
    {
      title: 'Restaurant',
      image: 'assets/images/cards/02-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: '',
      moduleId: 5,
      planId: 16,
      active: true
    },
    {
      title: 'Óptica',
      image: 'assets/images/cards/02-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: '',
      moduleId: null,
      planId: null,
      active: true
    },
    {
      title: 'Integracion',
      image: 'assets/images/cards/02-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: `${url_modulo.integrator}`,
      moduleId: 8,
      planId: 19,
      active: true
    }
  ];

  activatedModules: any[] = [];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedModules = this.modules.filter(item => item.active === true);
  }

  goToDashboardPage(module: any) {
    console.log('goToDashboardPage', { module });

    const { redirect, planId } = module;

    const token = this.authService.getTokenAuthenticated();

    if (redirect) {
      window.open(`${redirect}/valid-access/${planId}/${token}`, '_self');
    }
  }

  formatDateAsRelative(date: string): string {
    return moment(date, moment.ISO_8601).fromNow();
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

}
