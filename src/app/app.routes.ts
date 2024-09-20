import { Routes } from '@angular/router';
import { UploadComponent } from './routes/upload/upload.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';

export const routes: Routes = [
    {path: "upload", component:UploadComponent},
    {path: "dashboard", component:DashboardComponent},
    {path:'', pathMatch:'full', component:DashboardComponent}
];
