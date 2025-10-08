import { inject, Injectable } from '@angular/core';

import { Contact, NewContact } from '../interfaces/contacto';
import { Auth } from './auth';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
    authService = inject(Auth);


   contactos:Contact[] = [];



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

   async getContacts(){
    const res = await fetch('https://agenda-api.somee.com/api/Contacts',
      {
        method: "GET",
        headers: {
          Authorization: "Bearer "+this.authService.token
        }
      })
      if(res.ok){
        const resJson:Contact[] = await res.json()
        this.contactos = resJson;
      }
  }
  
}