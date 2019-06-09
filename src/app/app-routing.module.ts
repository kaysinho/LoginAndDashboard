import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{ path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
