import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TableDataModel } from '../../models';

@Component({
  selector: 'tg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input()
  headers: string[];

  @Input()
  data: TableDataModel[][];

  constructor() { }

  ngOnInit() {
  }

}
