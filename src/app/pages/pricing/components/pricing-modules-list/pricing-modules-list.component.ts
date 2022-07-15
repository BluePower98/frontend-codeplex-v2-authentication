import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pricing-modules-list',
  templateUrl: './pricing-modules-list.component.html',
  styleUrls: ['./pricing-modules-list.component.scss']
})
export class PricingModulesListComponent implements OnInit {

  @Input() modules: Array<any> = [];
  @Output() openModalToRegister: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  openModal(plan: any): void {
    this.openModalToRegister.emit(plan);
  }

}
