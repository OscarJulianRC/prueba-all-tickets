import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFilters } from './event-filters';

describe('EventFilters', () => {
  let component: EventFilters;
  let fixture: ComponentFixture<EventFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
