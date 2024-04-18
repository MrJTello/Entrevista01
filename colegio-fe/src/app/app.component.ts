import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'colegio-fe';
  constructor( private router: Router)
  {}

  public fncVerAlumnos()
  {
    this.router.navigate(['/alumnos']);
  }

  public fncVerProfesores()
  {
    this.router.navigate(['/profesores']);
  }
}
