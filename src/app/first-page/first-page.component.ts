import { Component, inject, OnInit, signal } from '@angular/core';
import { ModelFormComponent } from '../model-form/model-form.component';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { QuestionsServicesService } from '../services/questions-service.service';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [ModelFormComponent, FeedbackFormComponent],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss',
})
export class FirstPageComponent implements OnInit {
  isNavVisible = signal(true);
  questionsService = inject(QuestionsServicesService);
  translation: any = null;

  ngOnInit(): void {
    this.translation = this.questionsService.getTranslation('ar');
  }

  closeFormNav() {
    this.isNavVisible.set(false);
  }
}
