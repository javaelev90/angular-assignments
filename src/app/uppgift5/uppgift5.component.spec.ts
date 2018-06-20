import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppgift5Component } from './uppgift5.component';

describe('Uppgift5Component', () => {
  let component: Uppgift5Component;
  let fixture: ComponentFixture<Uppgift5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uppgift5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uppgift5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
