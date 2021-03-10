import { NgModule } from "@angular/core";
import { contadorcomponent } from "../contador.component";

@NgModule({
  declarations: [contadorcomponent],
  exports: [contadorcomponent],
})
export class contadormodule {}
