import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartCountService } from 'src/app/services/cart-count.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  cartCount: number;

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('client');
    localStorage.removeItem('uid');
    this.router.navigate(['unauth/login']);
  }
}
