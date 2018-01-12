import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Overview } from '../models/overview.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class OverviewService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/omvormer'; // URL to web api
  private overviews: Overview[] = [];

  overviewsChanged = new Subject<Overview[]>();
  
  //
  //
  //
  constructor(private http: Http) {
    // this.readOverview();
   }

  //
  //
  //
  public getOverviews(): Promise<Overview[]> {
    console.log('overviews ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.overviews = response.json() as Overview[];
        return this.overviews
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public getOverview(index: number): Promise<Overview> {
    console.log('overview ophalen met id');
    return this.http.get(this.serverUrl + '/' + this.overviews[index]._id, { headers: this.headers })
      .toPromise()
      .then(response => {
          console.dir(response.json());
          return response.json() as Overview;
      })
      .catch( error => {
          return this.handleError(error);
      });
}

public updateOverview(index: number, newOverview : Overview){
    console.log("overview updaten");
    this.http.put(this.serverUrl + "/" + this.overviews[index]._id, { name: newOverview.name, hoeveelheid: newOverview.hoeveelheid })
      .toPromise()
      .then( () => {
        console.log("overview veranderd")
        this.getOverviews()
        .then(
          overviews => {
            this.overviews = overviews
            this.overviewsChanged.next(this.overviews.slice());
          }
        )
        .catch(error => console.log(error));
      })
      .catch( error => { return this.handleError(error) } );
  }

  public deleteOverview(index: number){
    console.log("Overview verwijderen");
    this.http.delete(this.serverUrl + "/" + this.overviews[index]._id)
      .toPromise()
      .then( () => {
        console.log("overview verwijderd") 
        this.getOverviews()
        .then(
          overviews => {
            this.overviews = overviews
            this.overviewsChanged.next(this.overviews.slice());
          }
        )
        .catch(error => console.log(error));
      })
      .catch( error => { return this.handleError(error) } );
  }

  public addOverview(overview: Overview) {
    console.log('overview opslaan');
    this.http.post(this.serverUrl, { name: overview.name, description: overview.description, hoeveelheid: overview.hoeveelheid })
      .toPromise()
      .then( () => {
        console.log("overview toegevoegd")
        this.getOverviews()
        .then(
            overviews => {
                this.overviews = overviews
                this.overviewsChanged.next(this.overviews.slice());
              }
        )
        .catch(error => console.log(error));
      }
      )
      .catch( error => { return this.handleError(error) } );
}

  //
  //
  //
  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}