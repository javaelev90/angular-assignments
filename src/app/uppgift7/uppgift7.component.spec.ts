import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppgift7Component } from './uppgift7.component';

describe('Uppgift7Component', () => {
  let component: Uppgift7Component;
  let fixture: ComponentFixture<Uppgift7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uppgift7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uppgift7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
