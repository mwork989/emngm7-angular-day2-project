import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home6Component } from './home6.component';

describe('Home6Component', () => {
  let component: Home6Component;
  let fixture: ComponentFixture<Home6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
