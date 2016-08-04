import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls: ['app/car-parts.component.css']
})

export class CarPartsComponent {
  carParts: CarPart[];

  ngOnInit() {
    this.carParts = CARPARTS;
  }

  totalCarParts() {
    let sum = 0;
    for (let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;
    // Alternative Solution #1 (for ES2015 experts)
    // return this.carParts.reduce(function(prev, current) {
    //   return prev + current.inStock;
    // }, 0 );

    // Alternative Solution #2 (for ES2015 experts)
    // return this.carParts.reduce(prev, current) => prev + current.inStock, 0 ); 
  };

  upQuantity(carPart) {
    if (carPart.quantity < carPart.inStock) carPart.quantity++;
  };

  downQuantity(carPart) {
    if (carPart.quantity != 0) carPart.quantity--;
  };
}