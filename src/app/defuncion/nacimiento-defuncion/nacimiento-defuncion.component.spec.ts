import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacimientoDefuncionComponent } from './nacimiento-defuncion.component';

describe('NacimientoDefuncionComponent', () => {
  let component: NacimientoDefuncionComponent;
  let fixture: ComponentFixture<NacimientoDefuncionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacimientoDefuncionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacimientoDefuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
