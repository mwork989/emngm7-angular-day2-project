import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home8Component } from './home8.component';

describe('Home8Component', () => {
  let component: Home8Component;
  let fixture: ComponentFixture<Home8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
