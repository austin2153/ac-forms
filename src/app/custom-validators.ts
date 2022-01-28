import { FormControl} from "@angular/forms";
import { Observable } from "rxjs";

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


  // custom async validator
  // takes a form control and returns a promise or observable of type any
  // new promise which will receive a function argument to the constructor
  // setTimeout will execute a timeout after 2 seconds
  static usernameValidation(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'campbella') {
          resolve({'invalidUsername': true});
        } else {
          resolve(null);
        }
      }, 2000);
    })
    return promise;
  }
}