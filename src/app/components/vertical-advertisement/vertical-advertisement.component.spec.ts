import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalAdvertisementComponent } from './vertical-advertisement.component';

describe('VerticalAdvertisementComponent', () => {
  let component: VerticalAdvertisementComponent;
  let fixture: ComponentFixture<VerticalAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalAdvertisementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerticalAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
