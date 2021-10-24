import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Eventos } from '../../model/eventos';

@Component({
  selector: 'app-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css']
})
export class SearchEventComponent implements OnInit {

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
