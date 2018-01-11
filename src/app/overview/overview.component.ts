import { Router,ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Overview } from '../models/overview.model'

@Component({
    selector: 'app-overview',
    styleUrls: ['./overview.component.css'],    
    templateUrl: './overview.component.html'
})
export class OverviewComponent{
    selectedOverview: Overview;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ){}

}