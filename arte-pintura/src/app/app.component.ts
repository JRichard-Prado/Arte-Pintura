import { Component,ViewEncapsulation,inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAccordionModule,ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{MatSlideToggleModule } from '@angular/material/slide-toggle';
// import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbAccordionModule,NgbDatepickerModule, MatSlideToggleModule,MatBadgeModule, MatButtonModule, MatIconModule,MatMenuModule],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arte-pintura';
  hidden = false;
  private modalService = inject(NgbModal);
	closeResult: WritableSignal<string> = signal('');

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult.set(`Closed with: ${result}`);
			},
			(reason) => {
				this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
  // material design 3
 

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


}
