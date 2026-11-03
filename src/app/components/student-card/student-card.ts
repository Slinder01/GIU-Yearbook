import { Component, computed, inject, input, signal } from '@angular/core';
import { Student } from '../../models/student.model';
import { RouterLink } from '@angular/router';
import { SavedService } from '../../services/saved.service';


@Component({
selector: 'app-student-card',
imports: [RouterLink],
templateUrl: './student-card.html',
styleUrl: './student-card.css',
})
export class StudentCard {
// The parent page will give us one student through this input.
readonly student = input.required<Student>();
private readonly saved = inject(SavedService);
protected readonly isSaved = computed(() => this.saved.isSaved(this.student().id));
protected onToggleSaved(event: Event): void {
 // The whole card is a link. Without these two lines, a click on the
 // heart would ALSO open the student's profile.
 event.preventDefault();
 event.stopPropagation();
 this.saved.toggle(this.student().id);
 }


private readonly imageFailed = signal(false);
protected readonly photoSrc = computed(() =>
this.imageFailed() ? 'images/placeholder-portrait.svg' : this.student().photo,
);
// Called by the template when the image cannot be loaded.
protected onImageError(): void {
this.imageFailed.set(true);
}
}


