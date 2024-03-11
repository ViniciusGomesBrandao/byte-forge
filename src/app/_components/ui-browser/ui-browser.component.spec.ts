import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBrowserComponent } from './ui-browser.component';

describe('UiBrowserComponent', () => {
  let component: UiBrowserComponent;
  let fixture: ComponentFixture<UiBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBrowserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
