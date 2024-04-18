import { Component, OnInit } from '@angular/core';
import { SrvAlumnosService } from '../../servicios/srv-alumnos.service';
import { MdlAlumno } from '../../modelos/MldAlumno';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mod-alumnos',
  templateUrl: './mod-alumnos.component.html',
  styleUrl: './mod-alumnos.component.css'
})
export class ModAlumnosComponent implements OnInit {

  private servicio:SrvAlumnosService;
  lAlumnos:MdlAlumno[] = [];
  constructor(clienteHttp:HttpClient)
  {
    this.servicio = new SrvAlumnosService(clienteHttp);
  }
  
  ngOnInit()
  {
    this.fncObtenerAlumnos();
  }

  fncObtenerAlumnos()
  {
    let params = {pId:1};
    this.servicio.fncConsultar(params).subscribe(respuesta => {
      if (respuesta.hayError){}
      else {
        this.lAlumnos = respuesta.data;
        console.table(JSON.stringify(this.lAlumnos));
      }
    });

  }

}
