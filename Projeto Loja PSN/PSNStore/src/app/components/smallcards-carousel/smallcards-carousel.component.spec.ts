import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcardsCarouselComponent } from './smallcards-carousel.component';

describe('SmallcardsCarouselComponent', () => {
  let component: SmallcardsCarouselComponent;
  let fixture: ComponentFixture<SmallcardsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcardsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallcardsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
