import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarclienteComponent } from './mostrarcliente.component';

describe('MostrarclienteComponent', () => {
  let component: MostrarclienteComponent;
  let fixture: ComponentFixture<MostrarclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarclienteComponent]
    });
    fixture = TestBed.createComponent(MostrarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
