import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from '../../services/toastr.service';
import { ToastMessage } from '../../model/toastr';

@Component({
  selector: 'app-toastr',
  imports: [],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.scss',
})
export class ToastrComponent implements OnInit {
  private readonly _toastrService = inject(ToastrService);
  toasts: ToastMessage[] = [];
  closeToast(id: number) {
    this._toastrService.removeToast(id);
  }
  ngOnInit(): void {
    this._toastrService.toastState$.subscribe((toasts) => {
      this.toasts = toasts;
    });
  }
}
