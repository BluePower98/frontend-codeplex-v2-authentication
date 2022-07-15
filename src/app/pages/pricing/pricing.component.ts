import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SignUpModalComponent } from 'app/pages/pricing/components/sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  modules: any;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {
    this.modules = this.route.snapshot.data.pricing;
  }

  ngOnInit(): void {}

  openModalToRegister(plan: any): void {
    this.dialog.open(SignUpModalComponent, {
      autoFocus: false,
      disableClose: true,
      width: '700px',
      data: {
        item: plan,
        title: 'Registrar nuevo usuario'
      }
    });
  }
}
