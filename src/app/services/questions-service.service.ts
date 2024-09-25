import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class QuestionsServicesService {
  http = inject(HttpClient);

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

  // editQuesiton(index , txt){

  // }

  getTranslation(direction: string) {
    if (direction === 'ar') {
      return ar;
    } else {
      return '';
    }
  }
}

export const ar = {
  app: {
    modelFrom: {
      heading: 'بناء نموذج الاحتمالية',
      dataSelection: 'إختيار البيانات',
      visibleFields: 'الحقول الظاهرة',
      hiddenFields: 'الحقول المخفية',
      step: 'الخطوة التالية',
      instructions:
        'إبدا بإختيار البيانات التى تريد ان تضيفها إلى النموذج ان تضيفها إلى النموذج ان تضيفها إلى النموذج',
      stage: {
        stageDescription: 'إختيار البيانات',
      },
    },
    firstPage: {
      nav: {
        option1: 'إختيار البيانات',
        option2: 'إضافة الرأس و الشعار',
        option3: 'تخصيص الألوان و المظهر',
        option4: 'العرض النهائى',
      },
    },
  },
};
