import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'lib-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  searchIndexForm: FormGroup;
  rules: FormArray;
  tableColumn = [];
  options = [];
  answers = [];
  availableAnswers = [];
  type = [];
  submitted = false;
  originData: any;
  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }
  get formData() {
    return this.searchIndexForm.get('rules') as FormArray;
  }
  ngOnInit() {
    this.init();
  }
  init() {
    this.tableColumn = this.data.tableColumn;
    this.options = this.data.options;
    this.searchIndexForm = this.fb.group({
      groupOp: new FormControl(this.data.settings.groupOp, [Validators.required]),
      rules: this.fb.array([])
    });
    for (let i = 0; i <  this.tableColumn.length; i++) {
      this.options.forEach(option => {
        if (this.tableColumn[i].type === option.type) {
          this.answers[i] = {
            type: option.type,
            values: option.values,
            data: option.data
          };
        }
      });
    }
    this.originData = this.data.settings.rules;
    for (let i = 0; i < this.originData.length; i++) {
      this.addControl(i);
    }
    this.availableAnswers[this.availableAnswers.length] = this.answers[0];
  }
  addControl(i) {
    this.rules = this.searchIndexForm.get('rules') as FormArray;
    this.rules.push(this.createControl(i));
    if (this.originData[i].field === '') {
      this.availableAnswers[i] = this.answers[0];
    } else {
      this.tableColumn.forEach(data => {
        if (data.definition === this.originData[i].field ) {
          this.setAnswer(data.type, i);
        }
      });
    }
  }
  createControl(i) {
    if (this.originData[i] === undefined) {
      this.originData[i] = {field: '', op: '', data: ''};
    }
    return this.fb.group({
      field: new FormControl(this.originData[i].field, [ Validators.required ]),
      op: new FormControl(this.originData[i].op, [ Validators.required ]),
      data: new FormControl(this.originData[i].data, [ Validators.required ])
    });
  }
  setAnswer(type, index) {
    this.answers.forEach(answer => {
      if (answer.type === type) {
        this.availableAnswers[index] = answer;
      }
    });
  }
  removeControl(i) {
    this.rules.removeAt(i);
    const answers = this.availableAnswers;
    const originData = this.data.settings.rules;
    this.availableAnswers = [];
    this.data.settings.rules = [];
    let k = 0;
    for (let index = 0; index < answers.length; index++) {
      if (i !== index) {
        this.availableAnswers[k] = answers[index];
        this.data.settings.rules[k] = originData[index];
        k++;
      }
    }
  }
  setDefault() {
    this.searchIndexForm = this.fb.group({
      groupOp: this.data.settings.groupOp,
      rules: this.fb.array([this.createControl(0)])
    });
    this.searchIndexForm.reset();
    this.searchIndexForm.controls.groupOp.setValue('And');
  }
  getFilterData() {
    this.submitted = true;
    if (this.searchIndexForm.invalid) {
      return;
    }
    this.dialogRef.close(this.searchIndexForm.value);
  }
  setOption(i, count) {
    this.rules.value[count].op = '';
    this.rules.value[count].data = '';
    this.availableAnswers[count] = this.answers[i];
    if (count === this.availableAnswers.length - 1) {
      this.availableAnswers[count + 1] = this.answers[0];
    }
  }
}
