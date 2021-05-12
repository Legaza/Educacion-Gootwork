import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CursosComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content,{size: 'lg', centered: true});
  }
  open2(record: any) {
    this.modalService.open(record,{size: 'xl', centered: true});
  }

  ngOnInit(): void {
  }

}
