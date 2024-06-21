import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Asegúrate de importar BrowserModule
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Cambiado RouterOutlet a RouterModule
import { FormularioModule } from './formulario/formulario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormularioModule,

  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
