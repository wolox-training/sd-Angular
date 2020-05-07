import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  @Input() placeholder: string;
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  @Input() inputName: string;
  filterValue = '';

  ngOnInit(): void {
  }

  emitFilter(input: string){
    this.filter.emit(input);
  }
}
