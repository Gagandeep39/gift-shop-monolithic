import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { FormSubmitModalService } from 'src/app/services/form-submit-modal.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  categoryId;
  submitted = false;
  updateCategoryForm: FormGroup;
  categories: Category[] = [];
  category: Category;
  categoryImageUrl = '';
  message;

  constructor(
    private route: ActivatedRoute,
    public loadingService: LoadingService,
    private categoryService: CategoryService,
    private location: Location,
    private formModal: FormSubmitModalService,
  ) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['categoryId'] || '';
    this.initForm();
    this.populateData();
  }
  initForm() {
    this.updateCategoryForm = new FormGroup({
      categoryId: new FormControl(this.categoryId),
      categoryName: new FormControl('', [Validators.required]),
      categoryDescription: new FormControl('', [Validators.required]),
      categoryImageUrl: new FormControl('', [Validators.required]),
    });
  }
  populateData() {
    this.categoryService
      .fetchById(this.categoryId)
      .subscribe((res: Category) => {
        this.category = res;
        this.categoryImageUrl = res.categoryImageUrl; // Apply image fetched from server
        this.populateFormFields(this.category);
      });
  }

  populateFormFields(category) {
    this.updateCategoryForm.patchValue({
      categoryId: category.categoryId,
      categoryName: category?.categoryName,
      categoryDescription: category?.categoryDescription,
      categoryImageUrl: category?.categoryImageUrl,
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.updateCategoryForm.valid)
      this.submitData(this.updateCategoryForm.value);
  }
  submitData(formData: any) {
    this.loadingService.enableLoading();
    this.categoryService.updateCategory(formData).subscribe(
      (response) => {
        this.loadingService.disableLoading();
        this.formModal.open(
          'Successfully updated Category with ID ' + response['categoryId'],
          '/admin/categoryview'
        );
        // this.message =
        //   'Successfully updated Category with ID ' + response['categoryId'];
        // setTimeout(() => {
        //   this.router.navigateByUrl('/admin/categoryview');
        // }, 3000);
      },
      (error) => {
        this.loadingService.disableLoading();
        if (error?.error?.message === 'FieldException')
          error.error.errors.forEach((element) =>
            this.updateCategoryForm.controls[element.field]?.setErrors({
              serverValidationError: element.message,
            })
          );
        else throw new Error(error);
      }
    );
  }

  updateImage(image) {
    this.categoryImageUrl = image;
  }

  resetToDefault() {
    this.populateFormFields(this.category);
    this.categoryImageUrl = this.category.categoryImageUrl;
  }

  goBack() {
    this.location.back();
  }
}
