import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  private readonly _usersService = inject(UsersService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _route = inject(Router);
  private userId: string | null = null;
  loading: boolean = true;
  userData: User = {} as User;
  getUserId() {
    this._activatedRoute.paramMap.subscribe({
      next: (res) => {
        this.userId = res.get('id');
        if (!this.userId) {
          this._route.navigate(['/users']);
        }
      },
    });
  }
  getUserData(id: string) {
    this._usersService.getById(id).subscribe({
      next: (res) => {
        this.userData = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      },
    });
  }
  ngOnInit(): void {
    this.getUserId();
    if (this.userId) {
      this.getUserData(this.userId);
    }
  }
}
