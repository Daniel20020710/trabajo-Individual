import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrartipoproductoComponent } from './mostrartipoproducto.component';

describe('MostrartipoproductoComponent', () => {
  let component: MostrartipoproductoComponent;
  let fixture: ComponentFixture<MostrartipoproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrartipoproductoComponent]
    });
    fixture = TestBed.createComponent(MostrartipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
