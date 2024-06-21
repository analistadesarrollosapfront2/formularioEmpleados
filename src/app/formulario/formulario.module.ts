import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
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
    CabeceraComponent,
    FormularioComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    //Modulos de Prime NG
    ButtonModule,
    PanelModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    RadioButtonModule,
    FieldsetModule,
    TableModule
  ],
  exports:[
    CabeceraComponent,
    FormularioComponent,
    ListadoComponent
  ]
})
export class FormularioModule { }
