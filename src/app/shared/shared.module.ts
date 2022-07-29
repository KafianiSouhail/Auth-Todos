import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorPipe } from './pipes';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorModule }  from '@angular/material/paginator';
import { FilterComponent } from './components/filter/filter.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ErrorPipe,
    HeaderComponent,
    PaginatorComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    // Ngx translate
    TranslateModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    // Flex module
    FlexLayoutModule,
    RouterModule,
    MatStepperModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    // Ngx skeleton
    NgxSkeletonLoaderModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  exports:[
    CommonModule,
    TranslateModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ErrorPipe,
    HeaderComponent,
    MatStepperModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    MatPaginatorModule,
    PaginatorComponent,
    FilterComponent,
    RouterModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
