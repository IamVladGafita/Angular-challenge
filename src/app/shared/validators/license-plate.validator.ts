import { AbstractControl, ValidationErrors } from '@angular/forms';
import { KentekenCheck } from 'rdw-kenteken-check';

export function licensePlateValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
        return null;
    }
    // const value = control.value;

    // const pattern1 = /^[A-Z]{2}\d{2}[A-Z]{2}$/; // Matches AA14BB pattern
    // const pattern2 = /^\d{2}[A-Z]{2}[A-Z]{2}$/; // Matches 12AABB pattern

    // if (pattern1.test(value)) {
    //     control.setValue(value.replace(/([A-Z]{2})(\d{2})([A-Z]{2})/, '$1-$2-$3'));
    // } else if (pattern2.test(value)) {
    //     control.setValue(value.replace(/(\d{2})([A-Z]{2})([A-Z]{2})/, '$1-$2-$3'));
    // }

    // example from library 'JFK01P'
    const license = new KentekenCheck(control.value);
    license.formatLicense();

    if (license.valid) {
        const formattedValue = license.newStr;

        if (control.value !== formattedValue) {
            control.patchValue(formattedValue);
        }
        return null
    } else {
        return { isLicenseValid: license.valid };
    }

}