import { Component, OnInit } from '@angular/core';
import { MotorService } from '../motor.service';
import { Observable } from 'rxjs';
import { Motor } from '../model/motor';

@Component({
  selector: 'app-motor-range',
  templateUrl: './motor-range.component.html',
  styleUrls: ['./motor-range.component.css']
})
export class MotorRangeComponent implements OnInit {

  motores: Observable<Motor[]>; 
  p1: number;
  p2:number;

  constructor(private motorService: MotorService) { }

  ngOnInit(): void {
  }

  cargarRango(){
    this.motorService.rangeMotor(this.p1 , this.p2).subscribe(
      motores => this.motores = motores
    );
  }
}
