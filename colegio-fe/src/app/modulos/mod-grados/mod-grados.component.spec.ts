import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModGradosComponent } from './mod-grados.component';

describe('ModGradosComponent', () => {
  let component: ModGradosComponent;
  let fixture: ComponentFixture<ModGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModGradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
