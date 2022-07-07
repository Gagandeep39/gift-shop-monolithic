/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-05 19:47:40
 * @modify date 2021-02-05 19:47:40
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Category } from 'src/app/models/category.model';
import { ProductStatus } from 'src/app/models/product-status.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { FormSubmitModalService } from 'src/app/services/form-submit-modal.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product-new',
  templateUrl: './add-product-new.component.html',
  styleUrls: ['./add-product-new.component.scss'],
})
export class AddProductNewComponent implements OnInit {
  submitted = false;
  updateProductForm: UntypedFormGroup;
  categories: Category[] = [];
  statuses = ProductStatus;
  product: Product;
  productIcon = '';
  message;

  constructor(
    private route: ActivatedRoute,
    public loadingService: LoadingService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private location: Location,
    private router: Router,
    private formModal: FormSubmitModalService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.populateData();
  }
  initForm() {
    this.updateProductForm = new UntypedFormGroup({
      productName: new UntypedFormControl('', [Validators.required]),
      productPrice: new UntypedFormControl('', [Validators.required]),
      discountPercent: new UntypedFormControl('', [Validators.required, Validators.pattern('^([1-9][0-9]{0,1})$')]),
      productStock: new UntypedFormControl('', [Validators.required]),
      productDescription: new UntypedFormControl('', [Validators.required]),
      productIcon: new UntypedFormControl('', [Validators.required]),
      productStatus: new UntypedFormControl('', [Validators.required]),
      categoryId: new UntypedFormControl('', [Validators.required]),
    });
  }

  populateData() {
    this.categoryService
      .fetchAllCategories()
      .pipe(take(1))
      .subscribe((res: Category[]) => {
        this.categories = res;
      });
  }

  submitForm() {
    this.submitted = true;
    if (this.updateProductForm.valid)
      this.submitData(this.updateProductForm.value);
  }
  submitData(formData: any) {
    this.loadingService.enableLoading();
    this.productService.addProduct(formData).subscribe(
      (response) => {
        this.loadingService.disableLoading();
        this.formModal.open('Successfully updated product with ID ' + response['productId'], '/admin/view')
      },
      (error) => {
        this.loadingService.disableLoading();
        if (error?.error?.message === 'FieldException')
          error.error.errors.forEach((element) =>
            this.updateProductForm.controls[element.field]?.setErrors({
              serverValidationError: element.message,
            })
          );
        else throw new Error(error);
      }
    );
  }

  updateImage(image) {
    this.productIcon = image;
  }

  goBack() {
    this.location.back();
  }
}
