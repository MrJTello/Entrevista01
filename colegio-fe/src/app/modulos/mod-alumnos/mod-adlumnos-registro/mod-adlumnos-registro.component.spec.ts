import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAdlumnosRegistroComponent } from './mod-adlumnos-registro.component';

describe('ModAdlumnosRegistroComponent', () => {
  let component: ModAdlumnosRegistroComponent;
  let fixture: ComponentFixture<ModAdlumnosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModAdlumnosRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModAdlumnosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
