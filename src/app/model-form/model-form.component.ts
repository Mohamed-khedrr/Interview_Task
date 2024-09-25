import { Component, inject, OnInit, signal } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { QuestionsServicesService } from '../services/questions-service.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-model-form',
  standalone: true,
  imports: [CdkDropList, CdkDrag, ReactiveFormsModule, TranslateModule],
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.scss',
})
export class ModelFormComponent implements OnInit {
  fb = inject(FormBuilder);
  questionsService = inject(QuestionsServicesService);
  VisibleInputIndex = signal(-1);
  translation: any = null;

  ngOnInit(): void {
    this.translation = this.questionsService.getTranslation('ar');
  }

  dataFrom = this.fb.group({
    itemName: '',
  });

  dropInVisible(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.questionsService.visibleList,
      event.previousIndex,
      event.currentIndex
    );
  }

  dropInHidden(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.questionsService.hiddenList,
      event.previousIndex,
      event.currentIndex
    );
  }

  editLabel(index: number) {
    this.VisibleInputIndex.set(index);
  }
  moveToHiddenList(index: number) {
    const [item] = this.questionsService.visibleList.splice(index, 1);
    this.questionsService.hiddenList.push(item);
  }

  moveToVisibleList(index: number) {
    const [item] = this.questionsService.hiddenList.splice(index, 1);
    this.questionsService.visibleList.push(item);
  }
  changeItem(index: number) {
    // this.vis;
  }
}
