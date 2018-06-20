import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppgift6Component } from './uppgift6.component';

describe('Uppgift6Component', () => {
  let component: Uppgift6Component;
  let fixture: ComponentFixture<Uppgift6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uppgift6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uppgift6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
