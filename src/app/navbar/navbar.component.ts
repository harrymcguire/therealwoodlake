import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  openMobileNav(){
    document.getElementById('mobileNav').style.display = 'block'
  }
  closeMobileNav(){
    document.getElementById('mobileNav').style.display = 'none'
  }
}
