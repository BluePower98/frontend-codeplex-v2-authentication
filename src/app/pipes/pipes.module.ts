import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSeguroPipe } from './dom-seguro.pipe';
import { UrlSafePipe } from './url-safe.pipe';
import { GroupPipe } from './group.pipe';
import { FilterPipe } from './filter.pipe';
import { PaginatePipe } from './paginate.pipe';
import { LengthPipe } from './Length.pipe';

const SHARED_PIPES = [
  DomSeguroPipe,
  UrlSafePipe,
  GroupPipe,
  FilterPipe,
  PaginatePipe,
  LengthPipe
];

@NgModule({
  declarations: [
    ...SHARED_PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...SHARED_PIPES
  ]
})
export class PipesModule { }
