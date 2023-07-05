import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBar1Component } from './menu-bar1.component';

describe('MenuBar1Component', () => {
  let component: MenuBar1Component;
  let fixture: ComponentFixture<MenuBar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBar1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
