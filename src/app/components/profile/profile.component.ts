import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AuthenticationService, UserService } from '@app/_services';
import { NotificationService } from '@app/_services/notification.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(private authenticationService: AuthenticationService, private notifyService :NotificationService,
    private userService: UserService) {
      }

  ngOnInit(): void {
    this.profile();
  }

  profile(){
    this.loading = true;
     this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });
  }

}
