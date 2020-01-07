import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacimientoPostComponent } from './nacimiento-post.component';

describe('NacimientoPostComponent', () => {
  let component: NacimientoPostComponent;
  let fixture: ComponentFixture<NacimientoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacimientoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacimientoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
