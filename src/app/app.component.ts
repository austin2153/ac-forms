import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ac-forms';

  // tdForm vars
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  // reactive form vars
  

  // use view child to access tdForm on componnent
  @ViewChild('tdForm') tdForm: NgForm;

  // Print tdForm values to console when submit button is pressed
  onSubmit() {
    console.log(this.tdForm.value);
  }
}
