import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout';
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];