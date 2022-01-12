import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IntervalModel, DAY_UNIX_TIME_STAMP } from '../../../shared/models';
import * as moment from 'moment';

@Component({
  selector: 'tg-interval-select',
  templateUrl: './interval-select.component.html',
  styleUrls: ['./interval-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntervalSelectComponent implements OnInit {
  selectedInterval: number = 300;

  @Output()
  intervalsChangeEvent = new EventEmitter<IntervalModel[][]>();

  ngOnInit() {
    this._generateIntervalsData();
  }

  private _generateIntervalsData() {
    const columnsNumber = DAY_UNIX_TIME_STAMP / this.selectedInterval;

    const data: IntervalModel[][] = [];

    for (let i = 0; i < moment().daysInMonth(); i++) {
      data.push([]);

      for (let j = 1; j < columnsNumber; j++) {
        data[i].push({ time: j * this.selectedInterval, value: `Detail_${i}_${j}` });
      }
    }

    this.intervalsChangeEvent.emit(data);
  }

  selectInterval(interval: number) {
    this.selectedInterval = interval;

    this._generateIntervalsData();
  }
}
