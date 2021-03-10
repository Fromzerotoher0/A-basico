import { combineLatest } from "rxjs";
import { Component } from "@angular/core";

@Component({
  selector: "app-heroe",
  templateUrl: "heroe.component.html",
})
export class Heroecomponent {
  nombre: string = "iron man";
  edad: number = 45;
  obtenernombre(): string {
    return `nombre : ${this.nombre} - edad : ${this.edad}`;
  }
  get nombrecapitalizado() {
    return this.nombre.toUpperCase();
  }
  cambiarnombre(): void {
    this.nombre = "spiderman";
  }
  cambiaredad(): void {
    this.edad = 18;
  }
}
