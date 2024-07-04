import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name: string = "";
  surname: string = "";
  email: string  = "";
  subject: string = "";
  message: string = "";

  sendMessage() {
    alert('Su respuesta ha sido enviada');
  }
}
