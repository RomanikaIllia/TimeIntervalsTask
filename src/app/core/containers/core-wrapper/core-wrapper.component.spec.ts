import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntervalSelectComponent } from '../../components';
import { CoreWrapperComponent } from './core-wrapper.component';

describe('CoreWrapperComponent', () => {
  let component: CoreWrapperComponent;
  let fixture: ComponentFixture<CoreWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, SharedModule],
      declarations: [IntervalSelectComponent, CoreWrapperComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldn`t crash with empty intervals', () => {
    expect(component.setIntervals).not.toThrowError(TypeError);
  });
});
