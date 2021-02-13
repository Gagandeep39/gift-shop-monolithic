import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.css'],
})
export class AccessDeniedComponent implements OnInit {
  returnUrl;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  previousPage() {
    console.log('Clicked');
    console.log(this.returnUrl);
    
    this.router.navigateByUrl(this.returnUrl);
  }
}
