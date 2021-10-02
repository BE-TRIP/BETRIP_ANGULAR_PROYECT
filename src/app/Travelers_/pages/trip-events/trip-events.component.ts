import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Eventos } from '../../model/eventos';

@Component({
  selector: 'app-trip-events',
  templateUrl: './trip-events.component.html',
  styleUrls: ['./trip-events.component.css']
})
export class TripEventsComponent implements OnInit {
  pruebita:Array<string>=['tuki','owo','hshdshd'];

  constructor(private eventosService:EventosService) { }


  eventoData:any;
  ngOnInit(): void {
    
    this.getEvents();
    
  }
 
  getEvents(){
        this.eventosService.getAll().subscribe(data => {
          this.eventoData = data;
          console.log(this.eventoData)
        });      
  }
  
}
