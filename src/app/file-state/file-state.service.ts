import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileStateService {
  constructor(
    
  ) { }

  files: string[] = [];

  saveFile(fileName: string) {
    this.files.push(fileName);
  }

}
