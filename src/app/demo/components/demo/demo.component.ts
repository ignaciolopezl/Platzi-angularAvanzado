import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  items = ["lillo","furipe","fedo"];
  obejto = {};
  power = 10;
  

  addItems(){
    this.items.push('nuevo item');
  }
  deleteItem(index : number){
    this.items.splice(index,1);
  }


  constructor() { 
    //code
  }

  ngOnInit(): void {
    //code
  }

}
