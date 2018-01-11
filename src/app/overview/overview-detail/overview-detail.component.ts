import { Component, OnInit, Input } from '@angular/core';
import { Overview } from '../../models/overview.model';
import { OverviewService} from '../../services/overview.service';

@Component({
  selector: 'app-overview-detail',
  templateUrl: './overview-detail.component.html',
  styleUrls: ['./overview-detail.component.css']
})
export class OverviewDetailComponent implements OnInit {
  @Input() overview: Overview;

  constructor() { }

  ngOnInit() {
  }

}
