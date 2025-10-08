import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-logged-layout',
  imports: [RouterOutlet],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.scss'
})
export class LoggedLayout {
authService = inject(Auth)
}
