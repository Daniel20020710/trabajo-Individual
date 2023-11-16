import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearventasComponent } from './crearventas.component';

describe('CrearventasComponent', () => {
  let component: CrearventasComponent;
  let fixture: ComponentFixture<CrearventasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearventasComponent]
    });
    fixture = TestBed.createComponent(CrearventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
