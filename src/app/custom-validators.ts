import { FormControl} from "@angular/forms";

// custom validator for reactive form (static method)
// receives a FormControl object, 
// returns a specific object on failure e.g {[errorMessage], true}
// return null if validation is successful
export class CustomValidators {

  // Fail validation on APM regex e.g APM0000000
  static invalidProjectName(control: FormControl): {[s: string]: boolean} {
      
      let apmReg = new RegExp('^APM+[0-9]{7}$');
      if (!apmReg.test(control.value)) {
        return {
          'invalidProjectName': true
        };
      }
      return null;
  }
}