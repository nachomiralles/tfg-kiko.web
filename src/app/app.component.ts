import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

import {AgmMap, MapsAPILoader, MouseEvent} from '@agm/core';
import {Area} from './model/Area';
import {DatabaseService} from './database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // name: string;
  areas: Area[];
  showModal = false;

  // Initial position
  initialLat = 39.477033;
  initialLon =  -0.373965;
  initialZoom = 14;

  // Marker
  currentName: string;
  currentMarker = false;
  currentLat: number;
  currentLon: number;
  currentRadius = 50;
  currentLabel: string;


  constructor(public databaseService: DatabaseService) {
    this.databaseService.allAreas.subscribe(
      (areas) => {
        this.areas = areas;
      }
    );


  }
  mapClicked($event: MouseEvent) {
    this.currentLat = $event.coords.lat;
    this.currentLon = $event.coords.lng;
    this.currentMarker = true;

  }

  saveNewPlace() {

    const newArea = new Area({
      nombre: this.currentName,
      latitud: this.currentLat,
      longitud: this.currentLon,
      radio: this.currentRadius,
      etiqueta: this.currentLabel
    });
    this.databaseService.newArea(newArea);
    this.resetPlaceData();
  }

  circleDragEnd(radius: number) {
    this.currentRadius = radius;
  }

  resetPlaceData() {
    this.showModal = false;
    this.currentName = undefined;
    this.currentLabel = undefined;
    this.currentMarker = false;
    this.currentLat = undefined;
    this.currentLon = undefined;
    this.currentRadius = 50;
  }

  delete(id: string) {
    this.databaseService.deleteArea(id);
  }
}
