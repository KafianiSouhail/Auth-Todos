import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidatorsUtil } from 'src/app/core/helpers';
import { SigninPyload } from '../../models/interfaces';
import { AuthFacade } from '../../state';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm:FormGroup;

  constructor(private authFacade:AuthFacade) { }

  ngOnInit(): void {
    this.initializeSigninForm();
  }

  initializeSigninForm():void{
    this.signinForm = new FormGroup({
      "identifier": new FormControl(null,
        [Validators.required, Validators.email, Validators.minLength(6)]
      ),
      "password": new FormControl(null,
        [Validators.required, MyValidatorsUtil.password, Validators.minLength(6)]
      )
    })
  }

  onSignin():void{
    if(this.signinForm.invalid) return;
    const signinPyload: SigninPyload = { ...this.signinForm.value };
    this.authFacade.signinRequest(signinPyload);
  }


}
