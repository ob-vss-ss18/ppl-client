import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  customerChosen: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChooseCustomer() {
this.customerChosen = true;
  }

  onNew(){
    this.router.navigate(['/calculations-leasing']);
  }

  onBuy(){
    this.router.navigate(['/calculations-purchase']);
  }

  addTestski(){

  }

}
