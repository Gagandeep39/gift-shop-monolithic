/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-28 22:48:06
 * @modify date 2021-01-28 22:48:06
 * @desc [description]
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalErrorModalService } from 'src/app/services/global-error-modal.service';

@Component({
  selector: 'app-global-error-modal',
  templateUrl: './global-error-modal.component.html',
  styleUrls: ['./global-error-modal.component.css'],
})
export class GlobalErrorModalComponent implements OnInit {
  display$: Observable<'open' | 'close'>;
  error;

  constructor(private modalService: GlobalErrorModalService) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
    this.openSubscription();
  }
  openSubscription() {
    this.display$.subscribe((res) => (this.error = this.modalService.error));
  }

  close() {
    this.modalService.close();
  }
}
