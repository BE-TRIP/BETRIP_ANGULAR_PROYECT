import { Component, OnInit } from '@angular/core';
import { TravelersService } from '../../services/travelers.service';

@Component({
  selector: 'app-traveler-profile',
  templateUrl: './traveler-profile.component.html',
  styleUrls: ['./traveler-profile.component.css']
})
export class TravelerProfileComponent implements OnInit {




  constructor(private travelersService:TravelersService) { }
  


  logtraveler:any;
  


  ngOnInit(): void {

    this.getEvents();
  }

  getEvents(){
    this.logtraveler= localStorage.getItem('user');
        console.log(this.logtraveler)

this.logtraveler = JSON.parse(this.logtraveler);


              
  }  

  

  
}



