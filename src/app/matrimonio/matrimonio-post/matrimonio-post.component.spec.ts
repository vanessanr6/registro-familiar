import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrimonioPostComponent } from './matrimonio-post.component';

describe('MatrimonioPostComponent', () => {
  let component: MatrimonioPostComponent;
  let fixture: ComponentFixture<MatrimonioPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimonioPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrimonioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
