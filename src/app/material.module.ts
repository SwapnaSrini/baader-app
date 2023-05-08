import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
@NgModule( {
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        DragDropModule,
        ScrollingModule,
        CdkTableModule,
        CdkTreeModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        DragDropModule,
        ScrollingModule,
        CdkTableModule,
        CdkTreeModule
        
    ],
    providers: []
} )

export class AngularMaterialModule { }