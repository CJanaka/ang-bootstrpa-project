import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseAPIUrl : string = 'https://angularfirebaseapp-cj-default-rtdb.firebaseio.com/';
  constructor(
    private http : HttpClient
  ) { }

  create(customer : any): Observable<any>{
    return this.http.post(`${environment.baseAPIUrl}/customer.json`,customer);
  }

  getAll(): Observable<any>{
    return this.http.get(`${environment.baseAPIUrl}/customer.json`).pipe(map((res) => {
      const customer : any[] = [];
      for(const key in res){
        if (res.hasOwnProperty(key)) {
          customer.push({...res[key], id : key});
        }
      }
      return customer;
    }));
  }

  update(customer: any, id: string): Observable<any> {
    return this.http.put(`${environment.baseAPIUrl}/customer/${id}.json`, customer);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.baseAPIUrl}/customer/${id}.json`);
  }
}
