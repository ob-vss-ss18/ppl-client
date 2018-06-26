import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calculations-purchase',
  templateUrl: './calculations-purchase.component.html',
  styleUrls: ['./calculations-purchase.component.scss']
})
export class CalculationsPurchaseComponent implements OnInit {

  valuesSubmitted: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSave(){
   this.valuesSubmitted = true;
  }

  onCancel(){
    this.router.navigate(['/rental']);
  }
}
