import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModProfesoresComponent } from './mod-profesores.component';

describe('ModProfesoresComponent', () => {
  let component: ModProfesoresComponent;
  let fixture: ComponentFixture<ModProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModProfesoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
