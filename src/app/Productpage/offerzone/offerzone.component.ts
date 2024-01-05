import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-offerzone',
  templateUrl: './offerzone.component.html',
  styleUrls: ['./offerzone.component.scss']
})
export class OfferzoneComponent {
image: any;
title: any;
offer: any;
price: any;
patientReg:boolean=false;

cardData: any;

parent(){
  this.patientReg = true;
}

  
}
