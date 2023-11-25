import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home7Component } from './home7.component';

describe('Home7Component', () => {
  let component: Home7Component;
  let fixture: ComponentFixture<Home7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
