import { Component } from "@angular/core";

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
})
export class ListadoComponent {
  heroes: string[] = ["iron man", "spiderman", "goku", "vegeta", "hulk"];
  borrado: string = "";
  borrarheroe() {
    this.borrado = this.heroes.shift() || "";
  }
}
