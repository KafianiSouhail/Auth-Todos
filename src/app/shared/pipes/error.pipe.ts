import { Pipe, PipeTransform } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { TranslatorService } from "src/app/core/adapters";
import { FormErrors } from "src/app/core/models/enums";

@Pipe({
    name:'error'
})
export class ErrorPipe implements PipeTransform{

    private readonly errors:{ [key in FormErrors]: any } = {
        [FormErrors.REQUIRED]: `shared.errors.${FormErrors.REQUIRED}`,
        [FormErrors.MIN_LENGTH]: `shared.errors.${FormErrors.MIN_LENGTH}`,
        [FormErrors.EMAIL]: `shared.errors.${FormErrors.EMAIL}`,
        [FormErrors.PASSWORD]: `shared.errors.${FormErrors.PASSWORD}`,
        [FormErrors.NOT_SAME_PASSWORDS]: `auth.errors.${FormErrors.NOT_SAME_PASSWORDS}`
    }

    private readonly errorsWhichHavePyload:{ [key:string]:{ requiredValParam:string,translatorParam:string } } = {
        [FormErrors.MIN_LENGTH]:{requiredValParam:'requiredLength', translatorParam:'requiredLength'}
    }

    constructor(private translatorService:TranslatorService){}

    transform(
        ctrlValToRunErrorPipeWhenverCtrlValChanges:any,
        control:AbstractControl,
        whenFormGroupValidationStatusChanges:any=null):string{
        const errorKey:FormErrors = Object.keys(this.errors).find(_errorKey => control.hasError(_errorKey)) as any;
        if(!errorKey) return '';
        if(this.errorsWhichHavePyload[errorKey]) return this.getErrorFromErrorsWhichHavePyload(control,errorKey);
        return this.getError(errorKey);
    }

    private getErrorFromErrorsWhichHavePyload(control:AbstractControl,errorKey:FormErrors):string{
        const requiredVal:string = control?.getError(errorKey)[this.errorsWhichHavePyload[errorKey].requiredValParam];
        const translatorArgs = { [this.errorsWhichHavePyload[errorKey].translatorParam]: requiredVal }
        const RESULT_OF_TRANSLATION:string = this.translatorService.translate(this.errors[errorKey],translatorArgs);
        // return this.generateEmptyStringWhenTranslationFailed(this.errors[errorKey],RESULT_OF_TRANSLATION);
        return RESULT_OF_TRANSLATION;
    }

    private getError(errorKey:FormErrors):string{
        const RESULT_OF_TRANSLATION:string =  this.translatorService.translate(this.errors[errorKey]);
        // return this.generateEmptyStringWhenTranslationFailed(this.errors[errorKey],RESULT_OF_TRANSLATION);
        console.log(errorKey,this.errors[errorKey],RESULT_OF_TRANSLATION);
        return RESULT_OF_TRANSLATION;
    }

    // private isErrorPathHasBeenTranslated(path:string,resultOfPathTranslation:string):boolean{
    //     return path!=resultOfPathTranslation;
    // }

    // private generateEmptyStringWhenTranslationFailed(path:string,resultOfPathTranslation:string):string{
    //     if(this.isErrorPathHasBeenTranslated(path,resultOfPathTranslation)) return resultOfPathTranslation;
    //     return '';
    // }
}