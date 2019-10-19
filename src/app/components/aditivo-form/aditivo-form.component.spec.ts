import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditivoFormComponent } from './aditivo-form.component';

describe('AditivoFormComponent', () => {
  let component: AditivoFormComponent;
  let fixture: ComponentFixture<AditivoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditivoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditivoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
