import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from './components/services/services.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {WorkersComponent} from './components/workers/workers.component';
import {LandingComponent} from './components/landing/landing.component';
import {UsersComponent} from './components/users/users.component';
import {ServicesAddComponent} from './components/services/services-add/services-add.component';
import {ServicesListComponent} from './components/services/services-list/services-list.component';
import {ServicesEditComponent} from './components/services/services-edit/services-edit.component';

const routes: Routes = [
    {
      path: 'services',
      component: ServicesComponent,
      children: [
        {
          path: 'services-add',
          component: ServicesAddComponent
        },
        {
          path: 'services-edit',
          component: ServicesEditComponent
        }
      ]
    },

    {
      path: 'users', component: UsersComponent
    }

// { path: 'dashboard', component: DashboardComponent },
// { path: 'workers', component: WorkersComponent},
// { path: 'landing', component: LandingComponent},
// { path: '', redirectTo: '/landing', pathMatch: 'full' }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
