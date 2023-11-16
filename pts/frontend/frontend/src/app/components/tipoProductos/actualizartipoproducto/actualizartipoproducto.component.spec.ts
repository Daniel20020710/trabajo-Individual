import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizartipoproductoComponent } from './actualizartipoproducto.component';

describe('ActualizartipoproductoComponent', () => {
  let component: ActualizartipoproductoComponent;
  let fixture: ComponentFixture<ActualizartipoproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizartipoproductoComponent]
    });
    fixture = TestBed.createComponent(ActualizartipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
