import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTerminalComponent } from './ui-terminal.component';

describe('UiTerminalComponent', () => {
  let component: UiTerminalComponent;
  let fixture: ComponentFixture<UiTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTerminalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
