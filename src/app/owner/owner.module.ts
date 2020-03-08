import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
 
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent },
      { path: 'details/:id', component: OwnerDetailsComponent }
    ])
  ],
  exports:[
    SharedModule,
  ],
  declarations: [
    OwnerListComponent,
    OwnerDetailsComponent
  ]
})
export class OwnerModule { }