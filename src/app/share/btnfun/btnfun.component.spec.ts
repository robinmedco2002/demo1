import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnfunComponent } from './btnfun.component';

describe('BtnfunComponent', () => {
  let component: BtnfunComponent;
  let fixture: ComponentFixture<BtnfunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnfunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
