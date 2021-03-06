import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
selectedNewsId:number;
newsItems = [
	{
	    title: "BMW Researching Self-Driving Cars",
	    body: "We failed to anticipate how difficult it would be to program even the most sophisticated computers available today to emulate the selfish and asinine behaviour of the typical BMW driver. We ended up sending our software team to a psychiatric hospital to interview some pathological narcissists."
	},
	{
	    title: "Man Playing Pokémon Go App Eaten By Lions",
	    body: "Kenya, Africa - The instant addiction to the new Pokémon Go game has already reached all corners of the globe, causing its players all sorts of unique injuries in pursuit of hunting Pokémon."
	},
	{
	    title: "Amazon buys Rhode Island",
	    body: "In a move that will surely mark the beginning of the New World Order, Amazon has purchased the entire state of Rhode Island to be its western hemisphere distribution center."
	},
	{
	    title: "Telsa Motors Unveils Coal-Powered SUV",
	    body: "PALO ALTO, CA - Telsa Motors' CEO, Ellen Mush, announced their next green vehicle - The Telsa Model C. The model C is the first coal-powered vehicle since the 1884 Trepardeux. It was a coal fired steam propelled carriage."
	}
]
expandNews(id: number){
this.selectedNewsId = id;
return false

}
  constructor() { }

  ngOnInit() {
  }

}
