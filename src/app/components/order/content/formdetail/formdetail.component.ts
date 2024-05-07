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
    'Mısır',
    'Sucuk',
    'Kanada Jambonu',
    'Salam',
    'Ananas',
    'Tavuk Izgara',
    'Jalepenos',
    'Kabak',
    'Soğan',
    'Sarımsak',
  ];

  count: number = 1;

  constructor() {}

  minusButton() {
    if (this.count > 1) {
      this.count--;
    } else {
      this.count = 1;
    }
  }

  addButton() {
    this.count++;
  }
}
