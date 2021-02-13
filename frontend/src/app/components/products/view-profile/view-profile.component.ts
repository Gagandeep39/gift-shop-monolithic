import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { Product } from 'src/app/models/product.model';
import { UserDetails } from 'src/app/models/user-details.model';
import { AuthModalService } from 'src/app/services/auth-modal.service';
import { AuthService } from 'src/app/services/auth.service';
import { CartConfirmModalService } from 'src/app/services/cart-confirm-modal.service';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/event.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ManageUserService } from 'src/app/services/manage-user.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
})
export class ViewProfileComponent implements OnInit {
  user: UserDetails;

  constructor(
    public loadingService: LoadingService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    public eventService: EventService,
    private authService: AuthService,
    private authModalService: AuthModalService,
    private manageUserService: ManageUserService
  ) {}

  ngOnInit(): void {
    this.fetchUserDetails();
  }
  fetchUserDetails() {
    this.manageUserService
      .fetchById(this.authService.fetchFromSessionStorage().userId)
      .subscribe((res: UserDetails) => {
        console.log(res);

        this.user = res;
      });
  }

  goBack() {
    this.location.back();
  }
}
