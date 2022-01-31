import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ac-forms';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  projectForm: FormGroup;

  // use view child to access tdForm on componnent
  @ViewChild('tdForm') tdForm: NgForm;

  // print tdForm values to console
  onSubmit() {
    const value = this.tdForm.value;
    console.log(value);
    console.log(value.email);
    console.log(value.subscription);
    console.log(value.password);
    console.log(value.amount);
  }

  // CustomValidators.usernameValidation
  // reactive form with a custom validator on projectName
  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName]),
      'userName': new FormControl(null, [Validators.required, Validators.minLength(4)], [CustomValidators.usernameValidation]),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  // output form values to console
  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
