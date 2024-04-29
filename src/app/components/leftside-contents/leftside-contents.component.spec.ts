import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideContentsComponent } from './leftside-contents.component';

describe('LeftsideContentsComponent', () => {
  let component: LeftsideContentsComponent;
  let fixture: ComponentFixture<LeftsideContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftsideContentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftsideContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
