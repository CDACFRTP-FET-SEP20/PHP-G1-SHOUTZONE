import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutFeedComponent } from './shout-feed.component';

describe('ShoutFeedComponent', () => {
  let component: ShoutFeedComponent;
  let fixture: ComponentFixture<ShoutFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoutFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
