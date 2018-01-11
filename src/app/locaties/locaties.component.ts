import { Router,ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-locaties',
    styleUrls: ['./locaties.component.css'],
    templateUrl: './locaties.component.html'
})
export class LocatiesComponent{

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ){}

}