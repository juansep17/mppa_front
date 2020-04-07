import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ServicesComponent} from './components/services/services.component';
import {ServicesAddComponent} from './components/services/services-add/services-add.component';
import {ServicesListComponent} from './components/services/services-list/services-list.component';
import {AppRoutingModule} from './app-routing.module';
import {WorkersComponent} from './components/workers/workers.component';
import {WorkersListComponent} from './components/workers/workers-list/workers-list.component';
import {WorkerAddComponent} from './components/workers/worker-add/worker-add.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LandingComponent} from './components/landing/landing.component';
import {UsersComponent} from './components/users/users.component';
import {RequestService} from './services/request.service';
import {UsersListComponent} from './components/users/users-list/users-list.component';
import {UsersAddComponent} from './components/users/users-add/users-add.component';
import {RepositoryService} from './services/repository.service';
import {HttpClientModule} from '@angular/common/http';
import {ServicesEditComponent} from './components/services/services-edit/services-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    ServicesAddComponent,
    ServicesListComponent,
    WorkersComponent,
    WorkersListComponent,
    WorkerAddComponent,
    DashboardComponent,
    LandingComponent,
    UsersComponent,
    UsersListComponent,
    UsersAddComponent,
    ServicesEditComponent
  ],
  exports: [
    ServicesEditComponent,
    ServicesListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RequestService, RepositoryService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
