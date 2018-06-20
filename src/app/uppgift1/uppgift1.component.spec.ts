import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppgift1Component } from './uppgift1.component';

describe('Uppgift1Component', () => {
  let component: Uppgift1Component;
  let fixture: ComponentFixture<Uppgift1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uppgift1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uppgift1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
