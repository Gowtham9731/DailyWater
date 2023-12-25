import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-enquires',
  templateUrl: './enquires.component.html',
  styleUrls: ['./enquires.component.scss']
})
export class EnquiresComponent {
  public complain: any=[];
  // constructor(private router: Router){}
  constructor(private httpClient: HttpClient, private router: Router,private apiservice: ApiService) { }

  
  ngOnInit(): void {

    this.apiservice.getComplaintDaata('https://retoolapi.dev/jnIL0K/enquiry').subscribe(
      (data: any) => {
        this.complain=data;
        console.log(data);
      }
    )

  }

}

// constructor(private router: Router,private apiservice:ApiService){}
// public orders: any =[];

  
// ngOnInit(): void {
//    this.apiservice.getApiData(ApiUrls.orderApi).subscribe((datas: any)=>
//    {
//     this.orders=datas;
//     console.log(datas);
    
//    })
// }