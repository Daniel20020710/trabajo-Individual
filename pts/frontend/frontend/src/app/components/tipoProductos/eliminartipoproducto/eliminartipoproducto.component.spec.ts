import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminartipoproductoComponent } from './eliminartipoproducto.component';

describe('EliminartipoproductoComponent', () => {
  let component: EliminartipoproductoComponent;
  let fixture: ComponentFixture<EliminartipoproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminartipoproductoComponent]
    });
    fixture = TestBed.createComponent(EliminartipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
