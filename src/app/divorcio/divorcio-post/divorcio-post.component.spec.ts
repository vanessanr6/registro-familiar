import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorcioPostComponent } from './divorcio-post.component';

describe('DivorcioPostComponent', () => {
  let component: DivorcioPostComponent;
  let fixture: ComponentFixture<DivorcioPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivorcioPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorcioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
