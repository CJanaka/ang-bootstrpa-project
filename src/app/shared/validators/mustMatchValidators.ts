import { FormGroup } from "@angular/forms";

export function MustMatch(controlName:string, matchControllerName: string) {
    return (formGroup : FormGroup)=>{
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchControllerName];

        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
            return;
            //in here, it will check the error that isn't a must mach error
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({mustMatch : true});
        }else{
            matchingControl.setErrors(null);
        }
    }
}