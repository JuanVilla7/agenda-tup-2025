import { Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactos:Contact[] = [
    {
    firstName: 'Gonzalo',
    lastName: 'Bechara',
    address: 'San Lorenzo',
    email: 'gbechara@austral.edu.ar',
    number: '123456',
    company: 'Austral',
    id: 0,
    isFavorite: false,
    description: 'Hola',
    image: ''
  }
  ];

  createContact(NuevoContacto: NewContact){
     const contacto:Contact = {
      ...NuevoContacto,
      id: Math.random(),
      isFavorite: false
    }

     this.contactos.push(contacto)
  }

  deleteContact(id:number){
    this.contactos = this.contactos.filter(contacto => contacto.id !== id);
  }

  editContact(){}

  getContacts(){}
  
}