import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MdlResultado } from '../modelos/MdlResultado';
import { MdlAlumnoIns, MdlAlumnoUpd } from '../modelos/MldAlumno';

@Injectable({
  providedIn: 'root'
})
export class SrvAlumnosService {
  urlApi:string = 'http://127.0.0.1:5047/Alumnos/';
  constructor(private http: HttpClient) { }

  public fncConsultar(params:any):Observable<MdlResultado>
  {
    return this.http.post<MdlResultado>(this.urlApi+'consulta',params);
  }

  public fncAgregar(params:MdlAlumnoIns):Observable<MdlResultado>
  {
    return this.http.post<MdlResultado>(this.urlApi,params);
  }

  public fncEditar(params:MdlAlumnoUpd):Observable<MdlResultado>
  {
    return this.http.post<MdlResultado>(this.urlApi,params);
  }

}
