import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-route',
  templateUrl: './search-route.component.html',
  styleUrls: ['./search-route.component.css']
})
export class SearchRouteComponent implements OnInit {

  constructor() { }
  filterPost = '';
  posts = [
    {
      "id": 1,
      "title": "San Isidro - Chosica",
      "date": "02/04/2019"
    },
    {
      "id": 2,
      "title": "San Borja - Pachacamac",
      "date": "11/04/2019"
    },
    {
      "id": 3,
      "title": "La Molina - Pachacamac",
      "date": "30/01/2019"
    },
    {
      "id": 4,
      "title": "La Molina - Lunahuana",
      "date": "30/05/2019"
    },
    {
      "id": 5,
      "title": "San Borja - Chosica",
      "date": "30/04/2019"
    }
  ];
  ngOnInit(): void {
  }

}
