import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAdlumnosConsultaComponent } from './mod-adlumnos-consulta.component';

describe('ModAdlumnosConsultaComponent', () => {
  let component: ModAdlumnosConsultaComponent;
  let fixture: ComponentFixture<ModAdlumnosConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModAdlumnosConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModAdlumnosConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
