import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
