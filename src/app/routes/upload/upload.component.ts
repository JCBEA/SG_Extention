import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { BottomNavComponent } from '../../utils/bottom-nav/bottom-nav.component';
@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomNavComponent);
  }
}
