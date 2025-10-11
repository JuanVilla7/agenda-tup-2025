import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contacto';
import { ContactsService } from '../../services/contact.services';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-list-item',
  imports: [RouterModule],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  // contacto = input.required<string>();
  index = input.required<number>();
  contacto = input.required<Contact>();

  contactsService = inject(ContactsService)
  showDeleteModal() {Swal.fire({
  title: "Estas seguro que quieres eliminar este contacto?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "rgba(214, 48, 48, 1)",
  cancelButtonColor: "rgba(48, 133, 214, 1)",
  confirmButtonText: "Eliminar!",
  cancelButtonText: "Cancelar"
}).then((result) => {
  if (result.isConfirmed) {
    this.contactsService.deleteContact(this.contacto().id);
    Swal.fire({
     
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

}
}



