import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  
})
export class AccountsComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      mobnum: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      permanantaddress:['', Validators.required],
      temporaryaddress:['',],
      termsAndConditions: [false, Validators.requiredTrue],

      // Default values for date and time
      submittedDate: [new Date().toISOString().split('T')[0], Validators.required],
      submittedTime: [new Date().toISOString().split('T')[1].substring(0, 5), Validators.required],
      membership:['General']
      
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Prepare the data to be sent to the API
      const formData = this.myForm.value;
      
      // You can replace the URL with your actual API endpoint
      const apiUrl = 'https://retoolapi.dev/a89ajD/register';

      // Send the data to the API
      this.http.post(apiUrl, formData).subscribe(
        response => {
          alert("Form submitted successfully");
          console.log('Form submitted successfully', response);
          // Handle success, e.g., show a success message
        },
        error => {
          console.error('Error submitting form', error);
          // Handle error, e.g., show an error message
        }
      );
    } else {
      alert("Please Fill Required Fields...");
      // Form is invalid, show validation errors or do something else
    }
  }

 

}

