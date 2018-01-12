import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Overview } from '../../models/overview.model';
import { OverviewService } from '../../services/overview.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-overview-list',
  templateUrl: './overview-list.component.html',
  styleUrls: ['./overview-list.component.css']
})
export class OverviewListComponent implements OnInit {
  @Output() overviewWasSelected = new EventEmitter<Overview>();
  id: number;
  overviewForm: FormGroup;
  editMode = false;

  overviews : Overview[] = [
  //   new Overview('Omvormer 1', 'Oplevering: 250KW'),
  //   new Overview('Omvormer 2', 'Oplevering: 300KW'),
  //   new Overview('Omvormer 3', 'Oplevering: 150KW')
   ];

  constructor(private overviewService: OverviewService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.overviewService.getOverviews()
    .then(overviews => {
        this.overviews = overviews
  })
    .catch(error => console.log(error));

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onOverviewSelected(overview: Overview){
    this.overviewWasSelected.emit(overview);
  }

  onSubmit() {
    if (this.editMode) {
      this.overviewService.updateOverview(this.id, this.overviewForm.value);
    } else {
      this.overviewService.addOverview(this.overviewForm.value);
    }
  }

  private initForm() {
    let overviewName = '';
    let overviewDescription = '';
    let overviewHoeveelheid;
    let currentoverview;

    if (this.editMode) {
      this.overviewService.getOverview(this.id)
      .then(
        overview => {
        currentoverview = overview;
        overviewName = currentoverview.name;
        overviewDescription = currentoverview.description;
        overviewHoeveelheid = currentoverview.hoeveelheid;
        }
      )
      .catch(error => console.log(error));
      
    }
    this.overviewForm = new FormGroup({
      'name': new FormControl(overviewName, Validators.required),
      'description': new FormControl(overviewDescription, Validators.required),
      'hoeveelheid': new FormControl(overviewHoeveelheid, Validators.required),      
    });
  }
}
