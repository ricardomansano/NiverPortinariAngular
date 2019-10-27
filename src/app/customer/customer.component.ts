import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Array<any>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() { }

  // [*Rest: Consumindo o service no componente]

  // Novo
  newCustomer(customer){
    this.customerService
      .newCustomer(customer)
      .subscribe( () => this.getCustomers() ); // Lista todos ao fim da inclusao
  }

  // Lista todos
  getCustomers(){
    this.customerService.getCustomers()
      .subscribe(data => this.customers = data)
  }

  // Lista um cliente
  getCustomer(id){
    this.customerService.getCustomer(id)
      .subscribe(data => this.customers = data)
  }

  // Deleta
  delCustomer(id){
    this.customerService.delCustomer(id)
      .subscribe(data => this.customers = data)
  }


}
