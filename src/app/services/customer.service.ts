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

  // Novo
  newCustomer(customer){
    return this.http.post<any[]>(`${this.customerUrl}`, customer)
  }

  // Lista todos
  getCustomers(){
    return this.http.get<any[]>(`${this.customerUrl}`)
  }

  // Lista um cliente
  getCustomer(id: string){
    return this.http.get<any[]>(`${this.customerUrl + "/" + id}`)
  }

  // Deleta
  delCustomer(id: string){
    return this.http.delete<any[]>(`${this.customerUrl + "/" + id}`)
  }
  
  // Restaura
  restoreCustomer(){
    return this.http.delete<any[]>(`${this.customerUrl + "/" + id}`)
  }
}
