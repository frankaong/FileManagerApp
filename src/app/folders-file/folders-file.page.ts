import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-folders-file',
  templateUrl: './folders-file.page.html',
  styleUrls: ['./folders-file.page.scss'],
  standalone: false,
})
export class FoldersFilePage implements OnInit {

  constructor() { }
  files: string[] = [];
  selectedContent = '';
  selectedFile: string | null = null;

  ngOnInit() {
    this.loadFiles();
  }

  async loadFiles() {
    try {
      const fileList = await Filesystem.readdir({
        directory: Directory.Documents,
        path: '',
      });
      this.files = fileList.files.map(file => file.name);
    } catch (error) {
      console.error('Error loading files:', error);
    }
  }

  async readFile(file: string) {
    try {
      this.selectedFile = file;
      
      const result = await Filesystem.readFile({
        path: file,
        directory: Directory.Documents,
      });
  
      if (typeof result.data === 'string') {
        this.selectedContent = atob(result.data); 
      } else if (result.data instanceof Blob) {
        const text = await result.data.text(); 
        this.selectedContent = text;
      }
    } catch (error) {
      console.error('Error reading file:', error);
    }
  }  

  async deleteFile(file: string) {
    try {
      await Filesystem.deleteFile({
        path: file,
        directory: Directory.Documents,
      });
      this.loadFiles(); 
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  }
}
