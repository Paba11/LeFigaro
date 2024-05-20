import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionArticlesComponent } from './selection-articles.component';

describe('SelectionArticlesComponent', () => {
  let component: SelectionArticlesComponent;
  let fixture: ComponentFixture<SelectionArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
