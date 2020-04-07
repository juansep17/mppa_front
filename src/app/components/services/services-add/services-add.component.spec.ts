import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAddComponent } from './services-add.component';

describe('ServicesAddComponent', () => {
  let component: ServicesAddComponent;
  let fixture: ComponentFixture<ServicesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
