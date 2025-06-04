import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private readonly _usersService = inject(UsersService);
  private readonly _router = inject(Router);
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
  isDark: boolean = false;
  getAllUsers() {
    this._usersService.getAll().subscribe({
      next: (res) => {
        console.log(res);
        this.users = res;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      },
    });
  }
  showUserDetails(id: number) {
    this._router.navigate(['/user/' + id]);
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark');
    this.isDark = !this.isDark;
  }
  ngOnInit(): void {
    this.getAllUsers();
  }
}
