import { Component, inject, OnInit } from '@angular/core';
import { DashboardComponent } from '../../routes/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css'] // Corrected to 'styleUrls'
})
export class BottomNavComponent implements OnInit {
  private router = inject(Router);
  private location = inject(Location);
  private _bottomSheetRef = inject<MatBottomSheetRef<DashboardComponent>>(MatBottomSheetRef);
  isUploadPage: boolean = false;

  ngOnInit() {
    // Check current route on initialization
    this.isUploadPage = this.router.url === '/upload';

    // Subscribe to router events to track navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isUploadPage = this.router.url === '/upload';
      }
    });
  }

  openLink(event: MouseEvent): void {
    event.preventDefault(); // Prevent default behavior

    if (this.isUploadPage) {
      this.location.back(); // Go back to the previous page
    } else {
      this.router.navigate(['/upload']); // Navigate to the upload route
    }

    this._bottomSheetRef.dismiss(); // Dismiss the bottom sheet
  }
}
