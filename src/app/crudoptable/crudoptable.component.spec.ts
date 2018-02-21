import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudoptableComponent } from './crudoptable.component';

describe('CrudoptableComponent', () => {
  let component: CrudoptableComponent;
  let fixture: ComponentFixture<CrudoptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudoptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudoptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
