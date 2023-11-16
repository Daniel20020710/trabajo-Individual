import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarventasComponent } from './eliminarventas.component';

describe('EliminarventasComponent', () => {
  let component: EliminarventasComponent;
  let fixture: ComponentFixture<EliminarventasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarventasComponent]
    });
    fixture = TestBed.createComponent(EliminarventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
