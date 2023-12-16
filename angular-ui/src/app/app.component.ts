import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonPopupComponent} from "./button-popup/button-popup.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {}
