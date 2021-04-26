/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-06 11:32:54
 * @modify date 2021-02-06 11:32:54
 * @desc [description]
 */
import { Location } from '@angular/common';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  stages = [
    { title: 'Shipping Details', color: '#24b7d8', path: 'shipping' },
    { title: 'Payment', color: '#20a5c2', path: 'payment' },
    { title: 'Success', color: '#1d92ad', path: 'success' },
  ];

  activeStages = [];
  routeSubscription: Subscription;
  title = 'Shipping Details';

  constructor(
    private location: Location,
    public loadingService: LoadingService,
    private router: Router
  ) {
    this.routeChangeSubscription();
  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }

  cancelOrder() {}

  routeChangeSubscription() {
    this.routeSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((val) => this.updateFlow(val['urlAfterRedirects']));
  }
  updateFlow(url) {
    if (url.includes('/shipping')) {
      this.activeStages = this.stages.slice(0, 1);
      this.title = this.stages[0].title;
    }
    else if (url.includes('/payment')){
      this.activeStages = this.stages.slice(0, 2);
      this.title = this.stages[1].title;
    }
    else if (url.includes('/success')){
      this.activeStages = this.stages.slice(0, 3);
      this.title = this.stages[2].title;
    }
  }

  getActiveStages() {
    return this.activeStages;
  }
}
