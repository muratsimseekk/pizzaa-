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
  selectedSize: string = '';
  totalPrice: number = 85.5;
  basketTotal: number = 0;

  constructor() {}

  minusButton() {
    if (this.count > 1) {
      this.count--;
      this.basketTotal = this.count * this.totalPrice;
    } else {
      this.count = 1;
    }
  }

  addButton() {
    this.count++;
    this.basketTotal = this.count * this.totalPrice;
  }

  getSelected() {
    this.totalPrice = 85.5;
    switch (this.selectedSize) {
      case 'kucuk':
        console.log('kucuk secildi');

        return (this.basketTotal = this.totalPrice);

      case 'orta':
        console.log('orta secildi');
        this.totalPrice += 20;
        return (this.basketTotal = this.totalPrice);
      case 'buyuk':
        console.log('buyuk secildi');
        this.totalPrice += 35;
        return (this.basketTotal = this.totalPrice);
      default:
        return 4;
    }
  }
}
