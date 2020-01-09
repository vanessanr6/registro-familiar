import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrimonioListComponent } from './matrimonio-list.component';

describe('MatrimonioListComponent', () => {
  let component: MatrimonioListComponent;
  let fixture: ComponentFixture<MatrimonioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimonioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrimonioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
