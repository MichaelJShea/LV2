import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './LV/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'agreements',
        loadChildren: './LV/agreements/agreements.module#AgreementsModule'
      },
      {
        path: 'units',
        loadChildren: './LV/units/units.module#UnitsModule'
      },
      {
        path: 'wells',
        loadChildren: './LV/wells/wells.module#WellsModule'
      },
      {
        path: 'owners',
        loadChildren: './LV/owners/owners.module#OwnersModule'
      },
      {
        path: 'cases',
        loadChildren: './LV/cases/cases.module#CasesModule'
      },
      {
        path: 'documents',
        loadChildren: './LV/documents/documents.module#DocumentsModule'
      },
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
