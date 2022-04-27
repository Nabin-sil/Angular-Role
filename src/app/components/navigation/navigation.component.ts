import { NotificationService } from './../../_services/notification.service';
import { Component, OnInit } from '@angular/core';
import { Role, User } from '@app/_models';
import { AuthenticationService, UserService } from '@app/_services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  user: User;
  navbarOpen = false;

  loading = false;
  users: User[];
  
  constructor(private authenticationService: AuthenticationService, private notifyService :NotificationService,
    private userService: UserService) {
      this.authenticationService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
    
      this.loading = true;
     this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });
  }
  
  get isAdmin() {
      return this.user && this.user.role === Role.Admin;
  }

  logout() {
      this.authenticationService.logout();
      this.showToasterLogout()

  }


toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
 
showToasterLogout() {
  this.notifyService.showInfo("You are Logged Out", "Logout")
}


}
