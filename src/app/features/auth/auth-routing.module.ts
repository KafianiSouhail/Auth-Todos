import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRoutes } from 'src/app/core/models/enums';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path:MyRoutes.SIGNIN,
    component:SigninComponent
  },
  {
    path:MyRoutes.SIGNUP,
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
