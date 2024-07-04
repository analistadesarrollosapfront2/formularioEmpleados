import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Asegúrate de importar BrowserModule
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Cambiado RouterOutlet a RouterModule
import { FormularioModule } from './formulario/formulario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesStoreModule } from './GamesStore/games-store.module';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormularioModule,
    GamesStoreModule,
    AppRoutingModule,
    //Prime NG
    MenubarModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    RadioButtonModule,
    FieldsetModule,
    TableModule

  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
