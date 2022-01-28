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

  // tdForm - vars
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  // tdForm - use view child to access tdForm on componnent
  @ViewChild('tdForm') tdForm: NgForm;

  // tdForm - Print tdForm values to console when submit button is pressed
  onSubmit() {
    console.log(this.tdForm.value);
  }

  // reactive form - vars
  projectForm: FormGroup;

  ngOnInit() {
    // exclude calling the validator methods Validators.email()
    // Angular takes care of this at the form level
    // required = not empty, email = email validation
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null,[Validators.required, CustomValidators.invalidProjectName]),
      'mail': new FormControl(null,[Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });

  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
