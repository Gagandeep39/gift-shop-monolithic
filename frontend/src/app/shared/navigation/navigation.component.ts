import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { UserDetailsEdit } from 'src/app/models/user-details-edit';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { EventService } from 'src/app/services/event.service';
import { ManageUserService } from 'src/app/services/manage-user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean;
  activeTabs = [];
  role: string;
  name: string;
  profileTabs = [
    { name: 'My Profile', link: '/products/profile' },
    { name: 'Edit Profile', link: '/products/editprofile' },
    { name: 'My Purchase', link: '/products/orders' },
  ];
  userTabs = [
    { name: 'About', link: '/about' },
    { name: 'Cart', link: '/products/cart' },
  ];
  anonymousTab = [
    { name: 'About', link: '/about' },
    { name: 'Login', link: '/login' },
    { name: 'Register', link: '/register' },
  ];
  adminTabs = [
    { name: 'Add Product', link: '/admin/add' },
    { name: 'View Products', link: '/admin/view' },
    { name: 'Add Category', link: '/admin/categoryadd' },
    { name: 'View Categories', link: '/admin/categoryview' },
  ];
  categories: Category[] = [];
  searchQuery = '';

  constructor(
    private authService: AuthService,
    private eventService: EventService,
    private categoryService: CategoryService,
    private router: Router,
    private manageUserService: ManageUserService
  ) {}
  initializeApp() {
    // If user data is present and token not expired, emi event to update navi
    if (this.authService.isAuthenticated()) {
      this.eventService.loggedInUser.next(
        this.authService.fetchFromSessionStorage()
      );
    }
    // Log out user if toke already expired
    else this.authService.logout();
  }
  initCategories() {
    this.categoryService
      .fetchAllCategories()
      .subscribe((res: Category[]) => (this.categories = res));
  }

  initializeNavItems() {
    this.eventService.loggedInUser.subscribe((res) => {
      if (!res || res['status'] === 202 ) {
        this.isLoggedIn = false;
        this.activeTabs = this.anonymousTab;
      } else {
        this.isLoggedIn = true;
        this.activeTabs = this.userTabs;
        this.role = res.role;
        this.fetchUserData();
      }
    });
  }

  fetchUserData() {
    this.manageUserService
      .fetchLoggedInUserForEdit()
      .subscribe(
        (res: UserDetailsEdit) =>
          (this.name = res?.firstName + ' ' + res?.lastName)
      );
  }

  ngOnInit(): void {
    this.initializeApp();
    this.initializeNavItems();
    this.initCategories();
  }

  logOut() {
    this.authService.logout();
  }

  changeCategory(category) {
    this.eventService.categoryChanged.next(category);
    this.redirectHome();
  }

  searchItem() {
    this.eventService.searchQueryChanged.next(this.searchQuery);
    this.searchQuery = '';
    this.redirectHome();
  }

  redirectHome() {
    this.router.navigateByUrl('/');
  }
}
