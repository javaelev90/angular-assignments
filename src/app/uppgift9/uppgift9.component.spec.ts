import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppgift9Component } from './uppgift9.component';

describe('Uppgift9Component', () => {
  let component: Uppgift9Component;
  let fixture: ComponentFixture<Uppgift9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uppgift9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uppgift9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
