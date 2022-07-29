import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidatorsUtil } from 'src/app/core/helpers';
import { FormErrors } from 'src/app/core/models/enums';
import { SignupPyload } from '../../models/interfaces';
import { AuthFacade } from '../../state';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;

  constructor(private authFacade:AuthFacade) { }

  ngOnInit(): void {
    this.initializeSignupForm();
  }

  initializeSignupForm():void{
    this.signupForm = new FormGroup({
      "firstName": new FormControl(null, [Validators.required, Validators.minLength(5)]),
      "lastName": new FormControl(null, [Validators.required, Validators.minLength(5)]),
      "email": new FormControl(null, [Validators.required, Validators.minLength(6), Validators.email]),
      "password": new FormControl(null, 
        [Validators.required, MyValidatorsUtil.password, Validators.minLength(6)]
      ),
      "confirmPassword": new FormControl(null, 
        [Validators.required, MyValidatorsUtil.password, Validators.minLength(6)]
      ),
    },
    MyValidatorsUtil.shouldMatch('password','confirmPassword',FormErrors.NOT_SAME_PASSWORDS)
    );
  }

  onSignup():void{
    if(this.signupForm.invalid) return;
    const USERNAME: string = this.signupForm.get('email')?.value;
    const signupPyload:SignupPyload = Object.assign({},this.signupForm.value,{username:USERNAME});
    this.authFacade.signupRequest(signupPyload);
  }

}
