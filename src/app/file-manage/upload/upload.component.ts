import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FileStateService } from 'src/app/file-state/file-state.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private fileState: FileStateService
  ) {}

  fileUploadForm = new FormGroup({
    fileName: new FormControl(''),
    file: new FormControl('', [
      Validators.required
    ])
  });

  // onChange(event) {

  // }

  submit() {
    // const file: File | null = this.fileUploadForm.value.file;
    let filePath = this.fileUploadForm.value.file.split("\\");
    console.log(filePath);
    let fileName = filePath[filePath.length - 1];

    this.fileState.saveFile(fileName);
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
