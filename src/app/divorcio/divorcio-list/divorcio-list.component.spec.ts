import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorcioListComponent } from './divorcio-list.component';

describe('DivorcioListComponent', () => {
  let component: DivorcioListComponent;
  let fixture: ComponentFixture<DivorcioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivorcioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorcioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
