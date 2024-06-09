import { Component } from '@angular/core';
//import { AbstractControl, Validators,ValidatorFn } from '@angular/forms';
import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


import { AddFlightService } from 'src/app/service/admin/add-flight.service';


 

@Component({

  selector: 'app-add-flight',

  templateUrl: './add-flight.component.html',

  styleUrls: ['./add-flight.component.css'],

})

export class AddFlightComponent {

  formData = {

    flightId: 0,

    flightName: '',

    source: '',

    destination: '',

    date: '',

    price: 0,

    arrival: '',

    departure: '',

  };

 

  constructor(private addFlightService: AddFlightService) { this.setMinDate();
    
  }

 

  handleAddFlight(data: any) {

    this.addFlightService.addFlight(this.formData).subscribe(

      (response) => {

        alert('Flight Added Successfully');

        console.log(response);

      },

      (error) => {

        console.log(error);

      }

    );

  }
  setMinDate() {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, '0');

    const day = String(today.getDate()).padStart(2, '0');

    this.formData.date = `${year}-${month}-${day}`;

  }

}

  
 