import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppgift4Component } from './uppgift4.component';

describe('Uppgift4Component', () => {
  let component: Uppgift4Component;
  let fixture: ComponentFixture<Uppgift4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uppgift4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uppgift4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
