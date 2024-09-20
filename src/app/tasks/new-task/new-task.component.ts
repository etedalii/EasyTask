import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closebackDrop = new EventEmitter<void>();
 // @Output() addTask = new EventEmitter<NewTaskData>();
  @Input({ required: true }) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor(private taskService: TasksService) {}

  onCloseClick() {
    this.closebackDrop.emit();
  }

  onSubmitForm() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.closebackDrop.emit();
    // this.addTask.emit({
    //     title: this.enteredTitle,
    //     summary: this.enteredSummary,
    //     date: this.enteredDate,
    //   })
  }
}
