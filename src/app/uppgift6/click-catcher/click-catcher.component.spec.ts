import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCatcherComponent } from './click-catcher.component';

describe('ClickCatcherComponent', () => {
  let component: ClickCatcherComponent;
  let fixture: ComponentFixture<ClickCatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickCatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickCatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
