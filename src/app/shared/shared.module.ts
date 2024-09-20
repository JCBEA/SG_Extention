import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatListModule
    ,RouterModule
  ],
  exports: [
    MatToolbarModule, MatButtonModule, MatIconModule, MatBottomSheetModule, MatListModule,
    RouterModule
  ]
})
export class SharedModule { }
