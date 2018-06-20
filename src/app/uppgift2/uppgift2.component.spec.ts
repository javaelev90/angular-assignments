import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppgift2Component } from './uppgift2.component';

describe('Uppgift2Component', () => {
  let component: Uppgift2Component;
  let fixture: ComponentFixture<Uppgift2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uppgift2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uppgift2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
