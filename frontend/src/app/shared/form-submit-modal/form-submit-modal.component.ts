import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormSubmitModalService } from 'src/app/services/form-submit-modal.service';
import { LoadingService } from 'src/app/services/loading.service';
import { UpdateStatusModalService } from 'src/app/services/update-status-modal.service';

@Component({
  selector: 'app-form-submit-modal',
  templateUrl: './form-submit-modal.component.html',
  styleUrls: ['./form-submit-modal.component.css'],
})
export class FormSubmitModalComponent implements OnInit {
  display$: Observable<'open' | 'close'>;
  message;

  constructor(
    private modalService: FormSubmitModalService,
    public loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
    this.openSubscription();
  }
  openSubscription() {
    this.display$.subscribe((res) => {
      this.message = this.modalService.message;
    });
  }

  close() {
    this.modalService.close();
    this.router.navigateByUrl(this.modalService.url);
  }
}
