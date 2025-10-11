import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Auth } from '../../services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logged-layout',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.scss'
})
export class LoggedLayout {
authService = inject(Auth)
showLogoutModal() {
Swal.fire({
  title: "¿Quiere cerrar sesión?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Cerrar"
}).then((result) => {
  if (result.isConfirmed) {
    this.authService.logout();
    Swal.fire({
      icon: "success",
      title: "Sesión cerrada",
      showConfirmButton: false,
      
    });
  }
});
}
}


