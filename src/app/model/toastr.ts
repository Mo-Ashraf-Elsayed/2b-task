export type ToastrType = 'success' | 'error';

export interface ToastMessage {
  id: number;
  message: string;
  type: ToastrType;
  timeout?: number;
}
