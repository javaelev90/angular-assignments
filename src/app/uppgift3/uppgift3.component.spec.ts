import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppgift3Component } from './uppgift3.component';

describe('Uppgift3Component', () => {
  let component: Uppgift3Component;
  let fixture: ComponentFixture<Uppgift3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uppgift3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uppgift3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
