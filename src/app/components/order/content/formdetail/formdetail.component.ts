import { Component } from '@angular/core';

@Component({
  selector: 'app-formdetail',
  templateUrl: './formdetail.component.html',
  styleUrls: ['./formdetail.component.css'],
})
export class FormdetailComponent {
  additional: string[] = [
    'Pepperoni',
    'Domates',
    'Biber',
    'Sosis',
    'Misir',
    'Sucuk',
    'Kanada Jambonu',
    'Salam',
    'Ananas',
    'Tavuk Izgara',
    'Jalepenos',
    'Kabak',
    'Sogan',
    'Sarimsak',
  ];

  constructor() {}

  minusButton() {}

  addButton() {}
}
