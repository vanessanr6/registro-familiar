import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefuncionListComponent } from './defuncion-list.component';

describe('DefuncionListComponent', () => {
  let component: DefuncionListComponent;
  let fixture: ComponentFixture<DefuncionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefuncionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefuncionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
