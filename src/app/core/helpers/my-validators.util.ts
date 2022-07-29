import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { FormErrors, MyPatterns } from "../models/enums";

export class MyValidatorsUtil{

    static password(control:AbstractControl):ValidationErrors | null{
        const regExp:RegExp = new RegExp(MyPatterns.PASSWORD);
        if(!regExp.test(control.value)) return { [FormErrors.PASSWORD]: control.value };
        return null;
    }

    static shouldMatch(controlName:string, matchControlName:string, errorName:string): ValidatorFn{
        return (formGroup:AbstractControl):ValidationErrors | null => {
            const control: AbstractControl = formGroup.get(controlName) as any;
            const matchControl: AbstractControl = formGroup.get(matchControlName) as any;
            if(this.shouldAddErrorToMatchControl(control,matchControl))   
                matchControl.setErrors({ [errorName]: matchControl.value });
            else if(matchControl.hasError(errorName)) matchControl.setErrors(null);
            return null;
        }
    }

    private static shouldAddErrorToMatchControl = (control:AbstractControl,matchControl:AbstractControl):boolean => {
        return (
            control?.value && matchControl?.value && 
            control.value!=matchControl.value
        );
    }
}