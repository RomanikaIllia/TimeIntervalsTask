import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IntervalSelectComponent } from './interval-select.component';

describe('IntervalSelectComponent', () => {
  let component: IntervalSelectComponent;
  let fixture: ComponentFixture<IntervalSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [IntervalSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalSelectComponent);
    component = fixture.componentInstance;
    spyOn(component.intervalsChangeEvent, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change selected interval', () => {
    const selectEl = fixture.debugElement.query(By.css('select')).nativeElement;

    selectEl.value = selectEl.options[0].value;
    selectEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.selectedInterval).toBe(300);
    expect(component.intervalsChangeEvent.emit).toHaveBeenCalled();

    selectEl.value = selectEl.options[1].value;
    selectEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.selectedInterval).toBe(1800);
    expect(component.intervalsChangeEvent.emit).toHaveBeenCalled();

    selectEl.value = selectEl.options[2].value;
    selectEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.selectedInterval).toBe(3600);
    expect(component.intervalsChangeEvent.emit).toHaveBeenCalled();
  });
});
