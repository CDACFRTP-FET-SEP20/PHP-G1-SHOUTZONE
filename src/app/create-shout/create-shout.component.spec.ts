import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShoutComponent } from './create-shout.component';

describe('CreateShoutComponent', () => {
  let component: CreateShoutComponent;
  let fixture: ComponentFixture<CreateShoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
