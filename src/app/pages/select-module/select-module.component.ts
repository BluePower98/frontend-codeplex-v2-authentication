import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/api/auth/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-select-module',
  templateUrl: './select-module.component.html',
  styleUrls: ['./select-module.component.scss']
})
export class SelectModuleComponent implements OnInit {


  modules: any[] = [
    {
      title: 'Módulo de Facturación',
      image: 'assets/images/cards/01-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: 'http://localhost:4300',
      active: true
    },
    {
      title: 'Módulo de Contabilidad',
      image: 'assets/images/cards/10-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: '',
      active: true
    },
    {
      title: 'Módulo de Logística',
      image: 'assets/images/cards/06-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: '',
      active: true
    },
    {
      title: 'Módulo de Óptica',
      image: 'assets/images/cards/03-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: '',
      active: false
    },
    {
      title: 'Módulo de Restaurant',
      image: 'assets/images/cards/02-320x200.jpg',
      description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.',
      redirect: '',
      active: false
    }
  ];

  activatedModules: any[] = [];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedModules = this.modules.filter(item => item.active === true);
  }

  goToDashboardPage(module: any) {
    console.log('goToDashboardPage', { module });

    const { redirect } = module;

    const token = this.authService.getTokenAuthenticated();

    if (redirect) {
      window.open(`${redirect}/valid-access/${token}`, '_self');
    }
  }

  formatDateAsRelative(date: string): string {
    return moment(date, moment.ISO_8601).fromNow();
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

}
