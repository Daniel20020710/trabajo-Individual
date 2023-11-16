import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarventasComponent } from './actualizarventas.component';

describe('ActualizarventasComponent', () => {
  let component: ActualizarventasComponent;
  let fixture: ComponentFixture<ActualizarventasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarventasComponent]
    });
    fixture = TestBed.createComponent(ActualizarventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
