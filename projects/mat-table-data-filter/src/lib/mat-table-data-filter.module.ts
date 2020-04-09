import { NgModule } from '@angular/core';
import { MatTableDataFilterComponent } from './mat-table-data-filter.component';
import { FilterComponent } from './filter/filter.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";



@NgModule({
  declarations: [MatTableDataFilterComponent, FilterComponent],
  imports: [
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [MatTableDataFilterComponent],
  entryComponents: [
    FilterComponent
  ]
})
export class MatTableDataFilterModule { }
