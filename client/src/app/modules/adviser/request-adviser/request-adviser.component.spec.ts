import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAdviserComponent } from './request-adviser.component';

describe('RequestAdviserComponent', () => {
  let component: RequestAdviserComponent;
  let fixture: ComponentFixture<RequestAdviserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAdviserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
