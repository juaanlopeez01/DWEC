import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlflowswitchComponent } from './controlflowswitch.component';

describe('ControlflowswitchComponent', () => {
  let component: ControlflowswitchComponent;
  let fixture: ComponentFixture<ControlflowswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlflowswitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlflowswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
