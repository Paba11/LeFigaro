import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioCentralComponent } from './radio-central.component';

describe('RadioCentralComponent', () => {
  let component: RadioCentralComponent;
  let fixture: ComponentFixture<RadioCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioCentralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
