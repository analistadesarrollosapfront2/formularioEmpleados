import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';



@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    
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
        TableModule,
        CardModule,
        ToolbarModule,
        SplitButtonModule,
        

        
  ],
  exports:[
    ContactComponent,
    HomeComponent,
    ProductsComponent
  ]
})
export class GamesStoreModule { }
