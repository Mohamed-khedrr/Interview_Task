import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionsServicesService {
  visibleList = [
    { placeholder: 'حقل أسم العميل', iconsUrl: 'imgs/user-square.svg' },
    { placeholder: 'حقل رقم الهاتف', iconsUrl: 'imgs/call.svg' },
    { placeholder: 'حقل البريد الألكتروني', iconsUrl: 'imgs/mail-outline.svg' },
    { placeholder: 'حقل المنتجات', iconsUrl: 'imgs/mail-outline.svg' },
    { placeholder: 'حقل الملاحظات', iconsUrl: 'imgs/mail-outline.svg' },
  ];

  hiddenList = [
    { placeholder: 'حقل مخصص 1', iconsUrl: 'imgs/pen-field.svg' },
    { placeholder: 'حقل مخصص 2', iconsUrl: 'imgs/pen-field.svg' },
    { placeholder: 'حقل مخصص 3', iconsUrl: 'imgs/pen-field.svg' },
  ];

  constructor() {}
}
