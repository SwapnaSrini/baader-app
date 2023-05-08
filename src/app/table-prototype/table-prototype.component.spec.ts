import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrototypeComponent } from './table-prototype.component';

describe('TablePrototypeComponent', () => {
  let component: TablePrototypeComponent;
  let fixture: ComponentFixture<TablePrototypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePrototypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
