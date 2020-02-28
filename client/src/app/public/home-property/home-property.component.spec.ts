import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePropertyComponent } from './home-property.component';

describe('HomePropertyComponent', () => {
  let component: HomePropertyComponent;
  let fixture: ComponentFixture<HomePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
