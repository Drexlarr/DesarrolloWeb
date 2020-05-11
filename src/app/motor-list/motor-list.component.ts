import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Motor } from '../model/motor';
import { MotorService } from '../motor.service';

@Component({
  selector: 'app-motor-list',
  templateUrl: './motor-list.component.html',
  styleUrls: ['./motor-list.component.css']
})
export class MotorListComponent implements OnInit {

  motores: Observable<Motor[]>; 
  constructor(private motorService: MotorService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    console.log("Llamando a servicio");
    this.motorService.getMotorList().subscribe(
      motores => this.motores = motores
    );
  }


}
