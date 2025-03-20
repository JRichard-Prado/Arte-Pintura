import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sub-menu',
  imports: [NgbNavModule],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.css'
})
export class SubMenuComponent {
	active = 'top';
}
