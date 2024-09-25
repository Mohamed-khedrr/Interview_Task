import { Component, inject } from '@angular/core';
import { QuestionsServicesService } from '../services/questions-service.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss',
})
export class FeedbackFormComponent {
  fb = inject(FormBuilder);
  questionsService = inject(QuestionsServicesService);
}
