import { FormGroup, FormControl } from '@angular/forms';

export class FormUtil {

    public static buildFormGroup(object): FormGroup {
        let formGroup:FormGroup = new FormGroup({});
        debugger
        Object.keys(object).forEach(key => {
            formGroup.addControl(key, new FormControl());
        });

        return formGroup;
    }
}