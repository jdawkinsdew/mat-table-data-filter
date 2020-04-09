import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FilterComponent} from "./filter/filter.component";

@Component({
  selector: 'lib-mat-table-data-filter',
  template: `
    <button mat-flat-button (click)="openOptionPanel()">
      <mat-icon>filter_list</mat-icon>
    </button>
  `,
  styles: []
})
export class MatTableDataFilterComponent implements OnInit {
  @Input() TableColumn: any;
  @Input() SearchOption: any;
  @Output() getResult = new EventEmitter();

  settings = {groupOp: 'And', rules: [{field: '', op: '', data: ''}]};
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openOptionPanel() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: '496px',
      height: '100%',
      autoFocus: false,
      position: {
        right: '0'
      },
      data: {tableColumn: this.TableColumn, options: this.SearchOption, settings: this.settings}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.settings = result;
        this.getResult.emit(result);
      } else {
        this.settings = {groupOp: 'And', rules: [{field: '', op: '', data: ''}]};
      }
    });
  }
}
