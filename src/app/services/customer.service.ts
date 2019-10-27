import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// [*Rest: Este video foi fundamental pra construcao do Service
// https://www.youtube.com/watch?v=UNkqooT1x8E ]
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerUrl = 'http://localhost:3333/rest/customer'

  constructor(private http: HttpClient) { }

  // [*Rest: Declarando os servicos que serao consumidos]
  getCustomers(){
    return this.http.get<any[]>(`${this.customerUrl}`)
  }

}
