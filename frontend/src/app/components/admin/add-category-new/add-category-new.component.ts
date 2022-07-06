/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-05 22:54:48
 * @modify date 2021-02-05 22:54:48
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { FormSubmitModalService } from 'src/app/services/form-submit-modal.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-add-category-new',
  templateUrl: './add-category-new.component.html',
  styleUrls: ['./add-category-new.component.scss'],
})
export class AddCategoryNewComponent implements OnInit {
  submitted = false;
  updateCategoryForm: UntypedFormGroup;
  categories: Category[] = [];
  category: Category;
  categoryImageUrl = '';
  message;

  constructor(
    public loadingService: LoadingService,
    private categoryService: CategoryService,
    private location: Location,
    private formModal: FormSubmitModalService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.updateCategoryForm = new UntypedFormGroup({
      categoryName: new UntypedFormControl('', [Validators.required]),
      categoryDescription: new UntypedFormControl('', [Validators.required]),
      categoryImageUrl: new UntypedFormControl('', [Validators.required]),
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.updateCategoryForm.valid)
      this.submitData(this.updateCategoryForm.value);
  }
  submitData(formData: any) {
    
    this.loadingService.enableLoading();
    this.categoryService.createCategory(formData).subscribe({
      next: (response) => {
        this.loadingService.disableLoading();
        this.formModal.open(
          'Successfully updated Category with ID ' + response['categoryId'],
          '/admin/categoryview'
        );
      },
      error: (error) => {
        this.loadingService.disableLoading();
        if (error?.error?.message === 'FieldException')
          error.error.errors.forEach((element) =>
            this.updateCategoryForm.controls[element.field]?.setErrors({
              serverValidationError: element.message,
            })
          );
        else throw new Error(error);
      },
    });
  }

  updateImage(image: string) {
    this.categoryImageUrl = image;
  }

  goBack() {
    this.location.back();
  }
}
