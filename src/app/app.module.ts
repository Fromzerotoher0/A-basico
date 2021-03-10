import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { heroesmodule } from "./heroes/heroe/heroes.module";
import { contadormodule } from "./contador/contador/contador.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, heroesmodule, contadormodule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
