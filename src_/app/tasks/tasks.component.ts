import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Dominar Angular',
      summary:
        'Aprender Angular para poder desenvolver aplicações web',
      dueDate: '31/11/2024',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Construir um protótipo do site da loja online',
      summary: 'Construir um protótipo do site da loja online para a loja de roupas',
      dueDate: '15/12/2024',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Preparar e descrever um modelo de problema',
      summary:
        'Preparar e descrever um modelo de problema para a disciplina de matemática',
      dueDate: '30/1/2025',
    },
  ];

}
