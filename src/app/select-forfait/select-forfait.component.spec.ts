import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectForfaitComponent } from './select-forfait.component';

describe('SelectForfaitComponent', () => {
  let component: SelectForfaitComponent;
  let fixture: ComponentFixture<SelectForfaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectForfaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
