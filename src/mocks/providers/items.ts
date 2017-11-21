import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "nome": "Holly Bear",
    "foto": "assets/img/speakers/bear.jpg",
    "categoria": "Holly is a Bear"
  };

  constructor() {
    let items = [
      {
        "nome": "Holly Bear",
        "foto": "assets/img/speakers/bear.jpg",
        "categoria": "Holly is a Bear"
      },
      {
        "nome": "Charlie Cheetah",
        "foto": "assets/img/speakers/cheetah.jpg",
        "categoria": "Charlie is a Cheetah."
      },
      {
        "nome": "Donald Duck",
        "foto": "assets/img/speakers/duck.jpg",
        "categoria": "Donald is a Duck."
      },
      {
        "nome": "Eva Eagle",
        "foto": "assets/img/speakers/eagle.jpg",
        "categoria": "Eva is an Eagle."
      },
      {
        "nome": "Ellie Elephant",
        "foto": "assets/img/speakers/elephant.jpg",
        "categoria": "Ellie is an Elephant."
      },
      {
        "nome": "Molly Mouse",
        "foto": "assets/img/speakers/mouse.jpg",
        "categoria": "Molly is a Mouse."
      },
      {
        "nome": "Paul Puppy",
        "foto": "assets/img/speakers/puppy.jpg",
        "categoria": "Paul is a Puppy."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
