export class Area {
  id: string;
  nombre: string;
  latitud: number;
  longitud: number;
  radio: number;
  etiqueta: string;

  constructor(doc: any) {
    this.nombre = doc.nombre;
    this.latitud = doc.latitud;
    this.longitud = doc.longitud;
    this.radio = doc.radio;
    this.etiqueta = doc.etiqueta;
  }

  setID(id: string){
    this.id = id;
  }
}
