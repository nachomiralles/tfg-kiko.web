import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Area} from './model/Area';
import {AngularFirestore} from 'angularfire2/firestore';
import {Subject} from 'rxjs';

@Injectable()
export class DatabaseService {
  db = firebase.firestore();
  public allAreas: Subject<Area[]> = new Subject();

  constructor(dbFS: AngularFirestore) {
    this.areasConection();


  }

  areasConection() {
    this.db.collection('Areas')
      .onSnapshot(
        (querySnapshot) => {
          const areas: Area[] = [];
          querySnapshot.forEach(
            (doc) => {
              const area = new Area(doc.data());
              area.setID(doc.id);
              areas.push(area);
            });
          this.allAreas.next(areas);
        });
  }
  newArea(area: Area) {

    this.db.collection('Areas')
      .doc()
      .set({
        nombre: area.nombre,
        latitud: area.latitud,
        longitud: area.longitud,
        radio: area.radio,
        etiqueta: area.etiqueta
      })
      .then(
        () => {
          console.log('Añadido');
        }
      );
  }

  deleteArea(id: string) {
    this.db.collection('Areas')
      .doc(id)
      .delete();
  }
}
