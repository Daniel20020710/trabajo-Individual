import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartipoproductoComponent } from './creartipoproducto.component';

describe('CreartipoproductoComponent', () => {
  let component: CreartipoproductoComponent;
  let fixture: ComponentFixture<CreartipoproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreartipoproductoComponent]
    });
    fixture = TestBed.createComponent(CreartipoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
