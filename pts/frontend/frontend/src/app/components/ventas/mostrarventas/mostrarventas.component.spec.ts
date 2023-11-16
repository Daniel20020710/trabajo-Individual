import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarventasComponent } from './mostrarventas.component';

describe('MostrarventasComponent', () => {
  let component: MostrarventasComponent;
  let fixture: ComponentFixture<MostrarventasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarventasComponent]
    });
    fixture = TestBed.createComponent(MostrarventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
