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

  ngOnInit() {
    this. getCustomers()
  }

  // [*Rest: Consumindo o service no componente]
  getCustomers(){
    this.customerService.getCustomers()
      .subscribe(data => this.customers = data)
  }
}
