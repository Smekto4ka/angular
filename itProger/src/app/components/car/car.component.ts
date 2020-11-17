import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {



  name: string;
  model: string;
  speed: number;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;


  constructor() {
  }
showEdit(){
    this.isEdit = !this.isEdit;
}

  ngOnInit(): void {
    this.name = 'audi';
    this.model = 'a3';
    this.speed = 20;
    this.colors = {
      car: 'white',
      salon: 'black',
      wheels: 'black'
    };
    this.options = ['abs', 'автопилот'];
  }

  addOpt(opt) {
    this.options.unshift(opt);
    return false;
  }

  delete(opt) {
    console.log(opt);

    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == (opt)) {
        this.options.splice(i, 1);
        break;
      }
    }

  }


  carSelect(carName): void {
    if (carName == 'bmw') {
      this.name = 'bmw';
      this.model = 'm3';
      this.speed = 20;
      this.colors = {
        car: 'white',
        salon: 'black',
        wheels: 'black'
      };
      this.options = ['abs', 'автопилот', 'aaa'];
    } else if (carName == 'audi') {
      this.name = 'audi';
      this.model = 'a3';
      this.speed = 20;
      this.colors = {
        car: 'white',
        salon: 'black',
        wheels: 'black'
      };
      this.options = ['abs', 'автопилот', 'bbb'];
    } else {
      this.name = 'mercedes';
      this.model = 'ex263';
      this.speed = 20;
      this.colors = {
        car: 'white',
        salon: 'black',
        wheels: 'black'
      };
      this.options = ['abs', 'автопилот', 'ccc'];
    }

  }

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
