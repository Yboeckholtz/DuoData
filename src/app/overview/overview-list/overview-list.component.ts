import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Overview } from '../../models/overview.model';

@Component({
  selector: 'app-overview-list',
  templateUrl: './overview-list.component.html',
  styleUrls: ['./overview-list.component.css']
})
export class OverviewListComponent implements OnInit {
  @Output() overviewWasSelected = new EventEmitter<Overview>();

  overviews : Overview[] = [
    new Overview('Omvormer 1', 'Oplevering: 250KW'),
    new Overview('Omvormer 2', 'Oplevering: 300KW'),
    new Overview('Omvormer 3', 'Oplevering: 150KW')
  ];

  constructor() { }

  ngOnInit() {
  }

  onOverviewSelected(overview: Overview){
    this.overviewWasSelected.emit(overview);
  }

}
