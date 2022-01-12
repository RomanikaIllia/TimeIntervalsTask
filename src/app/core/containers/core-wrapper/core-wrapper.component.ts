import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IntervalModel } from '../../../shared/models';
import * as moment from 'moment';

@Component({
  selector: 'tg-core-wrapper',
  templateUrl: './core-wrapper.component.html',
  styleUrls: ['./core-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreWrapperComponent {
  intervals: IntervalModel[][];
  tableHeaders: string[];

  setIntervals(intervals: IntervalModel[][]) {
    this.intervals = intervals;

    this.tableHeaders = intervals[0].map(x => moment.utc(x.time * 1000).format('HH:mm'));
  }
}
