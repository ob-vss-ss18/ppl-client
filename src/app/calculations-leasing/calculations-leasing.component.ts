import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calculations-leasing',
  templateUrl: './calculations-leasing.component.html',
  styleUrls: ['./calculations-leasing.component.scss']
})
export class CalculationsLeasingComponent implements OnInit {

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

  onBack(){
    this.valuesSubmitted = false;
  }
}
