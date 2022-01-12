import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, PerfectScrollbarModule],
      declarations: [TableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldn`t add table header without input', () => {
    const headerEl = fixture.debugElement.query(By.css('.t-header-wrapper'));

    expect(headerEl).toBeNull();
  });

  it('shouldn`t add table body without input', () => {
    const bodyEl = fixture.debugElement.query(By.css('.t-body'));

    expect(bodyEl).toBeNull();
  });
});
