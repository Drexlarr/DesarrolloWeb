import { Component, OnInit } from '@angular/core';
import { Motor } from '../model/motor';
import { MotorService } from '../motor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-motor',
  templateUrl: './create-motor.component.html',
  styleUrls: ['./create-motor.component.css']
})
export class CreateMotorComponent implements OnInit {

  motor: Motor = new Motor();

  constructor(private motorService: MotorService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.motorService.createMotor(this.motor).subscribe(
      data => this.router.navigate(['/list'])
    );
  }

}
