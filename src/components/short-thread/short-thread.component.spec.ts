import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortThreadComponent } from './short-thread.component';

describe('ShortThreadComponent', () => {
  let component: ShortThreadComponent;
  let fixture: ComponentFixture<ShortThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
