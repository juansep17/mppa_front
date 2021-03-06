import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEditComponent } from './services-edit.component';

describe('ServicesEditComponent', () => {
  let component: ServicesEditComponent;
  let fixture: ComponentFixture<ServicesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
