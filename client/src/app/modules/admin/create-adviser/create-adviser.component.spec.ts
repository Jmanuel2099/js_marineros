import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdviserComponent } from './create-adviser.component';

describe('CreateAdviserComponent', () => {
  let component: CreateAdviserComponent;
  let fixture: ComponentFixture<CreateAdviserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdviserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
