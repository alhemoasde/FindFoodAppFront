import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDonacionComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarDonacionComponent;
  let fixture: ComponentFixture<ListarDonacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDonacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
