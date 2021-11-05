import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TravelersService } from '../../services/travelers.service';
import { Traveler } from '../../model/traveler';
@Component({
  selector: 'app-login-traveler',
  templateUrl: './login-traveler.component.html',
  styleUrls: ['./login-traveler.component.css']
})
export class LoginTravelerComponent implements OnInit {
  travelerData:Traveler;
  submitted:boolean=false;
  registerForm: FormGroup=this.formBuilder.group({
    email:['',{validators:[Validators.required,Validators.email],updateOn:'change'}],
    password:['',{validators:[Validators.required,Validators.minLength(6)],updateOn:'change'}],
  });
  constructor(private formBuilder:FormBuilder,private travelerService:TravelersService) { 
  this.travelerData={}as Traveler;}
  ngOnInit(): void {
  }
  get email(){return this.registerForm.get('email');}
  get password(){return this.registerForm.get('password');}
  
  submitForm(){
      console.log()
      console.log('asasa')
      this.submitted=true;

  }
  saidSomething(){
    console.log('registrado exitosamente');
  }
  //post user
  postUser(){
    this.travelerData.id=0;
    console.log(this.travelerData)
     this.travelerService.create(this.travelerData).subscribe()
  }

}
