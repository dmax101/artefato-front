import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input() pixImage: string = "";

  toggleSpinnerIsHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

}
