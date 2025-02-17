import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.page.html',
  styleUrls: ['./create-file.page.scss'],
  standalone: false,
})
export class CreateFilePage implements OnInit {
  fileName = '';
  fileContent = '';

  constructor(private router: Router) {}

  ngOnInit() {
  }
  async createFile() {
    if (!this.fileName.trim()) return;

    try {
      await Filesystem.writeFile({
        path: `${this.fileName}.txt`,
        data: btoa(this.fileContent), 
        directory: Directory.Documents,
      });

      alert('File Created Successfully!');
      this.fileName = '';
      this.fileContent = '';
    } catch (error) {
      console.error('Error creating file:', error);
    }
  }
}
