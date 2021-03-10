import { Component } from "@angular/core";
@Component({
  selector: "app-contador",
  template: `
    <h1>{{ title }}</h1>
    <span>la base es : {{ base }}</span>
    <br />
    <button (click)="acumular(-base)">-{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(base)">+{{ base }}</button>
  `,
})
export class contadorcomponent {
  title: string = "contador app";
  numero: number = 10;
  base: number = 5;
  acumular(valor: number) {
    this.numero += valor;
  }
}
