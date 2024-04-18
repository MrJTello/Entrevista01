import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAlumnosComponent } from './mod-alumnos.component';

describe('ModAlumnosComponent', () => {
  let component: ModAlumnosComponent;
  let fixture: ComponentFixture<ModAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModAlumnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
