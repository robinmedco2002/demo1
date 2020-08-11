import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchildtoparentComponent } from './userchildtoparent.component';

describe('UserchildtoparentComponent', () => {
  let component: UserchildtoparentComponent;
  let fixture: ComponentFixture<UserchildtoparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserchildtoparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserchildtoparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
