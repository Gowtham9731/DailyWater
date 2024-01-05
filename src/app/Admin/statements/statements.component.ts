import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit{

//   editForm: FormGroup;
//   data: any[] = [];
//   filteredData: any[] = [];

//   constructor(private http: HttpClient,private fb: FormBuilder) {}
//   ngOnInit(): void {
   
//   this.editForm = this.fb.group({
//     name: ['', Validators.required],
//     mobnum: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//     dob: ['', Validators.required],
//     gender: ['', Validators.required],
//     permanantaddress: ['', Validators.required],
//     temporaryaddress: ['', Validators.required],
//     submittedDate: ['', Validators.required],
//   });

  
//     // Fetch data from your API
//     this.http.get('https://retoolapi.dev/a89ajD/register').subscribe((data: any) => {
//       this.data = data;
//       this.filteredData = [...data]; // Initially, set filteredData to the entire dataset
//     });
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
//     this.filteredData = this.data.filter(item =>
//       item.mobnum.toLowerCase().includes(filterValue)
//     );
//   }

//   editItem(item: any) {
//     // Implement edit logic here
//     this.editForm.patchValue(item);
//     console.log('Edit item:', item);
//   }

//   deleteItem(item: any) {
//     // Implement delete logic here
//     console.log('Delete item:', item);
//   }
// }

data: any[] = [];
  filteredData: any[] = [];
  editForm: FormGroup; // Angular form for editing

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      mobnum: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      permanantaddress: ['', Validators.required],
      temporaryaddress: ['', Validators.required],
      submittedDate: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Fetch data from your API
    this.http.get('https://retoolapi.dev/a89ajD/register').subscribe((data: any) => {
      this.data = data;
      this.filteredData = [...data];
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredData = this.data.filter(item =>
      item.mobnum.toLowerCase().includes(filterValue)
    );
  }

  editItem(item: any) {
    // Populate the edit form with the selected item's data
    this.editForm.patchValue(item);
  }

  deleteItem(item: any) {
    // Simple log to console for demonstration purposes
    console.log('Delete item:', item);
    // In a real-world application, you might show a confirmation dialog before deleting
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted with edited data:', this.editForm.value);
    // In a real-world application, you might send a request to update the data on the server
  }
}