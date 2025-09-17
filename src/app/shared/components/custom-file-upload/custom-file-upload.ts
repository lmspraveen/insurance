import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'custom-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-file-upload.html',
  styleUrls: ['./custom-file-upload.scss'],
})
export class CustomFileUpload {
  @Input() label: string = 'Upload Documents';
  @Input() accept: string = '*/*'; // you can restrict to .pdf,.jpg,.png
  @Input() multiple: boolean = true;

  @Output() filesChanged = new EventEmitter<File[]>();

  files: { file: File; url: string | null; typeLabel: string }[] = [];
  isDragOver = false;

  /** Handle normal file input selection */
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    this.addFiles(Array.from(input.files));
    input.value = ''; // reset so same file can be re-uploaded if needed
  }

  /** Handle drag over event */
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  /** Handle drag leave */
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  /** Handle file drop */
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;

    if (event.dataTransfer?.files.length) {
      this.addFiles(Array.from(event.dataTransfer.files));
    }
  }

  /** Add files to our list */
  private addFiles(newFiles: File[]) {
    newFiles.forEach((file) => {
      const typeLabel = this.getTypeLabel(file);
      const url = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;
      this.files.push({ file, url, typeLabel });
    });

    this.filesChanged.emit(this.files.map((f) => f.file));
  }

  /** Remove a single file */
  removeFile(index: number) {
    this.files.splice(index, 1);
    this.filesChanged.emit(this.files.map((f) => f.file));
  }

  /** Show 'Add More' tile only if multiple is allowed */
  canShowUploadTile(): boolean {
    return this.multiple || this.files.length === 0;
  }

  /** Helper: Determine file type label */
  private getTypeLabel(file: File): string {
    if (file.type.includes('pdf')) return 'PDF';
    if (file.type.includes('image')) return 'IMG';
    if (file.type.includes('word')) return 'DOC';
    if (file.type.includes('excel') || file.name.endsWith('.xls')) return 'XLS';
    return 'FILE';
  }
}
