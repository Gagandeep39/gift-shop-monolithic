import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessDeniedModalService } from 'src/app/services/access-denied-modal.service';

@Component({
  selector: 'app-access-denied-modal',
  templateUrl: './access-denied-modal.component.html',
  styleUrls: ['./access-denied-modal.component.css'],
})
export class AccessDeniedModalComponent implements OnInit {
  display$: Observable<'open' | 'close'>;

  constructor(
    private modalService: AccessDeniedModalService,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.router.navigateByUrl('/')
    this.modalService.close();
  }

  goBack() {
    this.location.back();
  }
}
