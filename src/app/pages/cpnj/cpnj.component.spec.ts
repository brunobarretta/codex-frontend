import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnjComponent } from './cpnj.component';

describe('CpnjComponent', () => {
  let component: CpnjComponent;
  let fixture: ComponentFixture<CpnjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
