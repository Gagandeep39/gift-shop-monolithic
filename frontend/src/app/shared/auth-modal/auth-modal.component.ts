/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-25 18:20:54
 * @modify date 2021-01-25 18:20:54
 * @desc [description]
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthModalService } from 'src/app/services/auth-modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit {
  display$: Observable<'open' | 'close'>;

  constructor(private modalService: AuthModalService, private router: Router) {}

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

  goTo(path) {
    this.router.navigate([path], { queryParams: { returnUrl: this.modalService.redirectUrl }});
    this.close();
  }
}
