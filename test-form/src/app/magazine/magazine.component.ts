import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  fullName =""
  editions = [
{editionCode: 1, editionName: "us", price: "10.99 USD"},
{editionCode: 21, editionName: "Canada", price: "3.99 USD"},
{editionCode: 31, editionName: "Nepal", price: "1.99 USD"}



  ]
  selectedEdition = this.editions[0];
  selectedShipping = "";
  acceptPolicy =false;
  constructor() { }

  ngOnInit() {
  }
  submitForm(){
let requestData ={
customername: this.fullName,
productCode: this.selectedEdition.editionCode,
acceptPolicy: this.acceptPolicy,
shipMode:this.selectedShipping


}

alert(JSON.stringify(requestData))
  }

}
