import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { Motor } from './model/motor';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  private urlBase = "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
  constructor(private http: HttpClient) { }//inyectando

  getMotorList(): Observable<any>{
    console.log(this.urlBase + "/listar");
    return this.http.get(this.urlBase + "/listar").pipe(
      map(Response => Response as Motor[])
    )
  }

  createMotor(motor: Object): Observable<Object>{
    return this.http.post(this.urlBase + "/registrar", motor, {headers: this.httpHeaders});
  }

  rangeMotor(precio1:number, precio2:number): Observable<any>{
    return this.http.get(this.urlBase + "/rango/" + precio1.toString() + "/" + precio2.toString()).pipe(
      map(Response => Response as Motor[])
    )
  }

}
