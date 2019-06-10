import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDataComponent } from './components/user-data/user-data.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard],
  children:[
    {
      path: 'all-users',
      component: UserDataComponent  ,
      canActivate: [AuthGuard]
    },
    {
      path: 'edit-user/username',
      component: EditUserComponent  ,
      canActivate: [AuthGuard]
    }

  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
