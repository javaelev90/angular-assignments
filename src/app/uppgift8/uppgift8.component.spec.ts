import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppgift8Component } from './uppgift8.component';

describe('Uppgift8Component', () => {
  let component: Uppgift8Component;
  let fixture: ComponentFixture<Uppgift8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uppgift8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uppgift8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
