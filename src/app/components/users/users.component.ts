import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { ToastrService } from '../../services/toastr.service';

@Component({
  selector: 'app-users',
  imports: [MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private readonly _usersService = inject(UsersService);
  private readonly _router = inject(Router);
  private readonly _toastrSErvice = inject(ToastrService);
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'website',
    'userDeatils',
  ];
  users: User[] = [] as User[];
  loading: boolean = true;
  getAllUsers() {
    this._usersService.getAll().subscribe({
      next: (res) => {
        this._toastrSErvice.show('Data loaded successfully!', 'success');
        this.users = res;
        this.loading = false;
      },
      error: (err) => {
        this._toastrSErvice.show('Failed to load data.', 'error');
        this.loading = false;
      },
    });
  }
  showUserDetails(id: number) {
    this._router.navigate(['/user/' + id]);
  }
  ngOnInit(): void {
    this.getAllUsers();
  }
}
