import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import {SearchrComponent} from './views/searchr/searchr.component';
import {AchatComponent} from './views/achat/achat.component';
import { UnauthenticatedGuard } from './unauthenticated.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'search',  component:SearchrComponent,canActivate: [UnauthenticatedGuard]},
  { path: 'achat',  component:AchatComponent,canActivate: [UnauthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

