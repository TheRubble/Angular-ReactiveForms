import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm! : FormGroup;
  customer = new Customer();
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    // this.customerForm = new FormGroup({
    //     firstName : new FormControl(),
    //     lastName : new FormControl(),
    //     emailAddress : new FormControl(),
    //     sendCatalog : new FormControl(true)
    //   }
    // );

    this.customerForm =  this.formBuilder.group({
      firstName : null,
      lastName : { value : "", disabled : false},
      emailAddress : null,
      sendCatalog : true
    })

  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestData() {
    this.customerForm.setValue({
      firstName : "Chriss",
      lastName : "Barnard",
      emailAddress : "therubble@hotmail.com",
      sendCatalog : false
    })
  }
}
