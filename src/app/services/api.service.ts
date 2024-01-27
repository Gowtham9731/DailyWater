import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: any;
  

  selectedCard: any;

  setSelectedCard(card: any) {
    this.selectedCard = card;
  }

  getSelectedCard() {
    return this.selectedCard;
  }
  
  constructor(private httpClient: HttpClient) { }
  getApiData(url: string){
    return this.httpClient.get(url);
  }

  //["userName=abi", "mobile=1478526698"]
  getApiDataByfilter(url: string, recordfilters: any){
    let appliedFilters = "";
    for(let recFilter of recordfilters){
      if(appliedFilters != "")
        appliedFilters += "&" + recFilter;
      else
        appliedFilters += recFilter;
    }
    return this.httpClient.get(url + "?" + appliedFilters);
  }

  postApiData(url: string, requestbody : any){
    return this.httpClient.post(url, requestbody);
  }

  putApiData(url: string,recordId: string, requestbody: any){
    return this.httpClient.put(url + "/" + recordId, requestbody);
  }

  deleteApiData(url: string, recordId: string){
    return this.httpClient.delete(url + "/" + recordId);
  }
  getdata (data:any){
    return this.httpClient.get("https://retoolapi.dev/BCxzLm/signup"+"?"+data);
  }
  getComplaintDaata (data:any){
    return this.httpClient.get("https://retoolapi.dev/jnIL0K/enquiry"+"?"+data);
  }
  getStockEntry (data:any){
    return this.httpClient.get("https://retoolapi.dev/UbKkRw/stockEntry"+"?"+data);
  }
  updateComplaintData(url: string,id:any, data: any) {
    return this.httpClient.put(url+'/'+id, data);
    // or use patch for partial updates
    // return this.httpClient.patch(url, data);
  }


  geturl(url:any){
    return this.httpClient.get(url);
  }

  
  private apiUrl = 'https://retoolapi.dev/ALBg1O/shopping';

  getCardById(cardId: number): Observable<any> {
    const url = `${this.apiUrl}/${cardId}`;
    return this.http.get(url);
  }

  // delete(id:number):Observable<any>{
  //   return this.http.delete('https://retoolapi.dev/jnIL0K/enquiry/${id}');

  //   // return this.http.put('url/${id}')
  // }
  private enqUrl = 'https://retoolapi.dev/jnIL0K/enquiry';

  deleteData(id: number): Observable<any> {
    const url1 = `${this.enqUrl}/${id}`;
    return this.http.delete(url1);
  }

  imagePath: string | null = null;

  setImagePath(imagePath: string) {
    this.imagePath = imagePath;
  }

  
}


