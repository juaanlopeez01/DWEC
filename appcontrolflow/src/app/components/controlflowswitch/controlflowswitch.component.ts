import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflowswitch',
  standalone: true,
  imports: [],
  templateUrl: './controlflowswitch.component.html',
  styleUrl: './controlflowswitch.component.css'
})
export class ControlflowswitchComponent {

  roles: String [] = ["admin", "editor", "suscriptor", "otros"]
  role: String = this.roles [-5]
  estudiantes: any [] = []
  nElementos: number

  constructor
}
