import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AficionesComponent } from './aficiones.component';

describe('AficionesComponent', () => {
  let component: AficionesComponent;
  let fixture: ComponentFixture<AficionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AficionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AficionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
