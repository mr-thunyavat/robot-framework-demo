import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileStateService } from '../file-state/file-state.service';

@Component({
  selector: 'app-file-manage',
  templateUrl: './file-manage.component.html',
  styleUrls: ['./file-manage.component.scss']
})
export class FileManageComponent {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private fileState: FileStateService
  ) {}

  redirectToAddFile() {
    this.router.navigate(['/file/upload'])//{relativeTo: this.route})
  }

  getFileLength(): number {
    return this.fileState.files.length;
  }

  getFirstFile(): string {
    return this.fileState.files[0];
  }

}
