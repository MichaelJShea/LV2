import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from '@iplab/ngx-file-upload';
import { FilesUploadComponent } from './files-upload.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule, NgSelectComponent } from '@ng-select/ng-select';

@NgModule({
  declarations: [FilesUploadComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgSelectComponent

  ],
  exports: [
    FilesUploadComponent
  ]
})
export class FilesUploadModule { }
