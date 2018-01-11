import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Overview } from '../../../models/overview.model'

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
  styleUrls: ['./overview-item.component.css']
})
export class OverviewItemComponent implements OnInit {
  @Input() overview : Overview;
  @Output() overviewSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.overviewSelected.emit();
  }

}
