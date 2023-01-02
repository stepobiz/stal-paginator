import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		PaginatorComponent
	],
	exports: [
		PaginatorComponent
	]
})
export class StalPaginatorModule { }
