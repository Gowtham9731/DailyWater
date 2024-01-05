import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ParamMap, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-enquires',
  templateUrl: './enquires.component.html',
  styleUrls: ['./enquires.component.scss']
})
export class EnquiresComponent {
  public complain: any = [];
row: any;


  // constructor(private router: Router){}
  constructor(private httpClient: HttpClient, private router: Router, private apiservice: ApiService) { }


  ngOnInit(): void {

    this.apiservice.getComplaintDaata('https://retoolapi.dev/jnIL0K/enquiry').subscribe(
      (data: any) => {
        this.complain = data;
        console.log(data);
      }
    )

  }


  getComplaintData(url: string) {
    return this.httpClient.get(url);
  }

  // In your component

  editApi(complaint: any) {
    complaint.name = this.complain
    this.apiservice.updateComplaintData('https://retoolapi.dev/jnIL0K/enquiry', complaint.id, complaint).subscribe(
      (data: any) => {
        this.complain = data;
        console.log(data);
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // delete(id: number) {
  //   this.apiservice.delete(id).subscribe(
  //     () => {
  //       alert('Enquiry Deleted');

  //     }
  //   )
  // }
  // onDelete(id: number): void {
  //   this.apiservice.deleteData(id).subscribe(
  //     () => {
  //       console.log('Delete successful');
  //       // Optionally, update your local data array or perform other actions
  //     },
  //     (error) => {
  //       console.error('Error deleting data', error);
  //     }
  //   );
  // }

  onDelete(id: number): void {
    const deleteObservable = this.apiservice.deleteData(id);
  
    if (deleteObservable) {
      deleteObservable.subscribe(
        () => {
          console.log('Delete successful');
          // Optionally, update your local data array or perform other actions
        },
        (error) => {
          console.error('Error deleting data', error);
        }
      );
    } else {
      console.error('Delete observable is null or undefined');
    }
  }
}
