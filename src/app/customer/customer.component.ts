import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Customer {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public dob: NgbDateStruct = null,
    public email: string = '',
    // public password: string = '',
    public street: string = '',
    public housenumber: string = '',
    public postalcode: string = '',
    public city: string = '',
  ) {}
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

// It maintains list of Customers
customers: Customer[] = [];
// It maintains customer Model
regModel: Customer;
// It maintains customer form display status. By default it will be false.
showNew: Boolean = false;
// It will be either 'Save' or 'Update' based on operation.
submitType: string = 'Save';
// It maintains table row index based on selection.
selectedRow: number;

constructor() {
  // Add default registration data.
  this.customers.push(new Customer('Johan', 'Peter', {year: 1980, month: 5, day: 12}, 'johan@gmail.com', 'Strasse', '1', '78945', 'Ort1'));
  this.customers.push(new Customer('Mohamed', 'Tariq', {year: 1975, month: 12, day: 3}, 'tariq@gmail.com', 'Strasse', '2', '78945', 'Ort2'));
  this.customers.push(new Customer('Nirmal', 'Kumar', {year: 1970, month: 7, day: 25}, 'nirmal@gmail.com', 'Strasse', '3', '78945', 'Ort3'));
}


  ngOnInit() {
        // Initiate new customer.
        this.regModel = new Customer();
        // Change submitType to 'Save'.
        this.submitType = 'Save';
        // display customer entry section.
        this.showNew = false;
  }

  // This method associate to New Button.
  onNew() {
    // Initiate new customer.
    this.regModel = new Customer();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display customer entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push customer model object into customers list.
      this.customers.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.customers[this.selectedRow].firstName = this.regModel.firstName;
      this.customers[this.selectedRow].lastName = this.regModel.lastName;
      this.customers[this.selectedRow].dob = this.regModel.dob;
      this.customers[this.selectedRow].email = this.regModel.email;
      this.customers[this.selectedRow].street = this.regModel.street;
      this.customers[this.selectedRow].housenumber = this.regModel.housenumber;
      this.customers[this.selectedRow].postalcode = this.regModel.postalcode;
      this.customers[this.selectedRow].city = this.regModel.city;
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new Customer.
    this.regModel = new Customer();
    // Retrieve selected customer from list and assign to model.
    this.regModel = Object.assign({}, this.customers[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display customer entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding customer entry from the list.
    this.customers.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide customer entry section.
    this.showNew = false;
  }

}
