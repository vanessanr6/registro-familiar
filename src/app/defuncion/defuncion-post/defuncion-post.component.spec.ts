import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefuncionPostComponent } from './defuncion-post.component';

describe('DefuncionPostComponent', () => {
  let component: DefuncionPostComponent;
  let fixture: ComponentFixture<DefuncionPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefuncionPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefuncionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
