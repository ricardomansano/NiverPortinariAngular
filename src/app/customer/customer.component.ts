import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Array<any>;
  id: string = ''; 
  name: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit() { }

  validForm(){
    return (this.id !== '')
  }

  // [*Rest: Consumindo o service no componente]

  // Novo
  newCustomer(restForm){
    this.customerService
      .newCustomer({"id": this.id, "name": this.name})
      .subscribe( () => {
        this.getCustomers() // Lista todos ao fim da inclusao
        
        restForm.reset()
        this.id = this.name = ''
    } ); 
  }

  // Lista todos
  getCustomers(){
    this.customerService.getCustomers()
      .subscribe(data => this.customers = data)
  }

  // Lista um cliente
  getCustomer(){
    this.customerService.getCustomer(this.id)
      .subscribe(data => this.customers = data)
  }

  // Deleta
  delCustomer(){
    this.customerService.delCustomer(this.id)
      .subscribe(data => this.customers = data)
  }

}
