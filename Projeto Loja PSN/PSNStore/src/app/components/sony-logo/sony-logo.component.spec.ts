import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyLogoComponent } from './sony-logo.component';

describe('SonyLogoComponent', () => {
  let component: SonyLogoComponent;
  let fixture: ComponentFixture<SonyLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonyLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
