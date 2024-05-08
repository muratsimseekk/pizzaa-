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

  selectedSize: string = 'kucuk';
  selectedDough: string = '';

  initialPrice: number = 85.5;
  sizePrice: number = 0;
  doughPrice: number = 0;
  itemPrice: number = 0;

  basketTotal!: number;

  itemsArr: string[] = [];

  constructor() {}

  minusButton() {
    if (this.count > 1) {
      this.count--;
      this.getBasketTotal();
    } else {
      this.count = 1;
    }
  }

  addButton() {
    this.count++;
    this.getBasketTotal();
  }

  getBasketTotal() {
    this.basketTotal =
      (this.initialPrice + this.sizePrice + this.doughPrice + this.itemPrice) *
      this.count;
  }

  getSelected() {
    switch (this.selectedSize) {
      case 'kucuk':
        this.sizePrice = 0;
        break;
      case 'orta':
        this.sizePrice = 10;
        break;
      case 'buyuk':
        this.sizePrice = 20;
        break;
      default:
        this.sizePrice = 0;
    }
    this.getBasketTotal();
  }

  getDough() {
    this.doughPrice = this.sizePrice;
    switch (this.selectedDough) {
      case 'ince':
        this.doughPrice = 0;
        break;
      case 'peynirli':
        this.doughPrice = 20;
        break;
      case 'kalin':
        this.doughPrice = 30;
        break;
      default:
        this.doughPrice = 0;
    }
    this.getBasketTotal();
  }

  addItems(item: string) {
    const checkBox = document.getElementById(item) as HTMLInputElement;

    if (this.itemsArr.length < 10) {
      if (checkBox.checked) {
        this.itemsArr.push(item);
        this.itemPrice += 5;
      } else {
        const index = this.itemsArr.indexOf(item);
        if (index !== -1) {
          this.itemsArr.splice(index, 1);
          this.itemPrice -= 5;
        }
      }
    } else {
      if (!checkBox.checked) {
        const index = this.itemsArr.indexOf(item);
        if (index !== -1) {
          this.itemsArr.splice(index, 1);
          this.itemPrice -= 5;
        }
      } else {
        checkBox.checked = false;
        alert('En fazla 10 ek malzeme seçebilirsiniz.');
      }
    }

    console.log(this.itemsArr);
    this.getBasketTotal();
  }
}
