import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public el: any;

  @HostListener('swiperight', ['$event']) public swipePrev(event: any) {
  this.el.show();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
