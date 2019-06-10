import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'edit-user/username',
  component: EditUserComponent  ,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
