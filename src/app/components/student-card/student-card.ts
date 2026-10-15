import { Component, computed, input, signal } from '@angular/core';
import { Student } from '../../models/student.model';
import { RouterLink } from '@angular/router';

@Component({
selector: 'app-student-card',
imports: [RouterLink],
templateUrl: './student-card.html',
styleUrl: './student-card.css',
})
export class StudentCard {
// The parent page will give us one student through this input.
readonly student = input.required<Student>();

private readonly imageFailed = signal(false);
protected readonly photoSrc = computed(() =>
this.imageFailed() ? 'images/placeholder-portrait.svg' : this.student().photo,
);
// Called by the template when the image cannot be loaded.
protected onImageError(): void {
this.imageFailed.set(true);
}
}


