import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { EditUserComponent } from './pages/home/components/edit-user/edit-user.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'home',
  loadChildren: './pages/home/home.module#HomeModule',
  canActivate: [AuthGuard]
},
{ path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{ path: '**', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
