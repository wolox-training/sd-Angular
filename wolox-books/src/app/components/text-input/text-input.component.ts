import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() inputLabel: string;
  @Input() inputName: string;
  @Input() inputType: string;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
