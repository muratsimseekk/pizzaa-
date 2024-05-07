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

  sizePrice: number = 85.5;
  basketTotal: number = this.sizePrice;

  doughPrice: number = 0;

  selectedDough: string = '';

  itemsArr: string[] = [];

  itemPrice: number = 0;

  constructor() {}

  minusButton() {
    if (this.count > 1) {
      this.count--;
      this.basketTotal = this.count * this.sizePrice;
    } else {
      this.count = 1;
    }
  }

  addButton() {
    this.count++;
    this.basketTotal = this.count * this.sizePrice;
  }

  getSelected() {
    this.sizePrice = 85.5;
    switch (this.selectedSize) {
      case 'kucuk':
        return (this.basketTotal = this.sizePrice);

      case 'orta':
        console.log('orta secildi');
        this.sizePrice += 20;
        return (this.basketTotal = this.sizePrice);

      case 'buyuk':
        console.log('buyuk secildi');
        this.sizePrice += 35;
        return (this.basketTotal = this.sizePrice);
      default:
        return this.sizePrice;
    }
  }

  getDough() {
    this.doughPrice = this.sizePrice;
    switch (this.selectedDough) {
      case 'ince':
        console.log('ince secildi');

        return (this.basketTotal = this.doughPrice);
      case 'peynirli':
        console.log('peynirli secildi');
        this.doughPrice += 20;
        return (this.basketTotal = this.doughPrice);
      case 'kalin':
        console.log('kalin secildi');
        this.doughPrice += 30;
        return (this.basketTotal = this.doughPrice);

      default:
        return this.basketTotal;
    }
  }

  addItems(item: string) {
    const checkBox = document.getElementById(item) as HTMLInputElement;

    if (this.itemsArr.length < 10) {
      if (checkBox.checked) {
        this.itemsArr.push(item);
        this.basketTotal += 5;
      } else {
        const index = this.itemsArr.indexOf(item);
        if (index !== -1) {
          this.itemsArr.splice(index, 1);
          this.basketTotal -= 5;
        }
      }
    } else {
      if (!checkBox.checked) {
        const index = this.itemsArr.indexOf(item);
        if (index !== -1) {
          this.itemsArr.splice(index, 1);
          this.basketTotal -= 5;
        }
      } else {
        checkBox.checked = false;
        alert('En fazla 10 ek malzeme seçebilirsiniz.');
      }
    }

    console.log(this.itemsArr);
  }
}
