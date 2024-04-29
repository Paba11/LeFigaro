import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsideContentsComponent } from './rightside-contents.component';

describe('RightsideContentsComponent', () => {
  let component: RightsideContentsComponent;
  let fixture: ComponentFixture<RightsideContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightsideContentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightsideContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
