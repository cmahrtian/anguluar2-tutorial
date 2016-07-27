import { bootstrap }    from '@angular/platform-browser-dynamic';

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <p>There are {{totalCarParts()}} total parts in stock.</p>
    <ul>
      <li *ngFor="let carPart of carParts">
        <h2>{{carPart.name | uppercase}}</h2>
        <p>{{carPart.description}}</p>
        <p>{{carPart.price | currency:'EUR':true}}</p>
        <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
        <p *ngIf="carPart.inStock === 0">Out of Stock</p>
      </li>  
    </ul>`

})

class AppComponent { 
  title = 'Ultra Racing';

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
  }

  carParts = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5,
    "price": 4.99
  },
  {
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks made from kryptonite",
    "inStock": 4,
    "price": 9.99
  },
  {
    "id": 3,
    "name": "Padded Seats",
    "description": "Super soft seats for a smooth ride",
    "inStock": 0
    "price": 20.99
  }];
}

bootstrap(AppComponent)