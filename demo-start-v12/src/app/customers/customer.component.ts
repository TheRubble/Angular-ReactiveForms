import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm = this.formBuilder.group(
    {
      firstName : [null, [Validators.required, Validators.minLength(3)]],
      lastName : [null, [Validators.required, Validators.maxLength(50)]],
      emailAddress : [null, [Validators.required, Validators.email]],
      sendCatalog : true,
      phone : null,
      notification : 'email'
   });

  customer = new Customer();
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {}

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

  setNotification(value : string) : void{
    const phone = this.customerForm.get("phone");
    if(value === "text"){
      phone?.setValidators(Validators.required)
    }
    else{
      phone?.clearValidators();
    }
    phone?.updateValueAndValidity();
  }

}
