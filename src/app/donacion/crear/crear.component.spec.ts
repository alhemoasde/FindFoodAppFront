import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDonacionComponent } from './crear.component';

describe('CrearComponent', () => {
  let component: CrearDonacionComponent;
  let fixture: ComponentFixture<CrearDonacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDonacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
