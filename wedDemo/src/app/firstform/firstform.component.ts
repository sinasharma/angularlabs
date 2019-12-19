import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})
export class FirstformComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

  onSubmit(theform:any){


console.log(theform.value.color);
console.log(theform.value.name);

  }
}
