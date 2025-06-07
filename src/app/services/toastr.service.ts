import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastMessage, ToastrType } from '../model/toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  private messages: ToastMessage[] = [];
  private toastSubject = new BehaviorSubject<ToastMessage[]>([]);
  toastState$ = this.toastSubject.asObservable();
  private toastCounter = 0;

  show(message: string, type: ToastrType = 'success', timeout = 3000) {
    const toast: ToastMessage = {
      id: ++this.toastCounter,
      message,
      type,
      timeout,
    };
    this.messages.push(toast);
    this.toastSubject.next(this.messages);
    console.log('push');
    setTimeout(() => this.removeToast(toast.id), timeout);
  }

  removeToast(id: number) {
    this.messages = this.messages.filter((t) => t.id !== id);
    this.toastSubject.next(this.messages);
  }
}
