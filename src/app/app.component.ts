import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ac-forms';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  // use view child to access tdForm
  @ViewChild('tdForm') tdForm: NgForm;

  // Print tdForm values when submit button is pressed
  onSubmit() {
    console.log(this.tdForm.value);
  }
}
