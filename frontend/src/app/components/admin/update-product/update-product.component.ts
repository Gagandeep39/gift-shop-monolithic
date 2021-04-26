/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-26 16:48:58
 * @modify date 2021-01-26 16:48:58
 * @desc [description]
 */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { FormSubmitModalService } from 'src/app/services/form-submit-modal.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  productId;
  submitted = false;
  updateProductForm: FormGroup;
  categories: Category[] = [];
  statuses = ['ENABLED', 'DISABLED'];
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
    this.productId = this.route.snapshot.params['productId'] || '';
    this.initForm();
    this.populateData();
  }
  initForm() {
    this.updateProductForm = new FormGroup({
      productId: new FormControl(this.productId),
      productName: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [Validators.required]),
      discountPercent: new FormControl('', [Validators.required]),
      productStock: new FormControl('', [Validators.required]),
      productDescription: new FormControl('', [Validators.required]),
      productIcon: new FormControl('', [Validators.required]),
      productStatus: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
    });
  }
  populateData() {
    this.categoryService.fetchAllCategories().subscribe((res: Category[]) => {
      this.categories = res;
    }).closed;
    this.productService.fetchById(this.productId).subscribe((res: Product) => {
      this.product = res;
      this.productIcon = res.productIcon; // Apply image fetched from server
      this.populateFormFields(this.product);
    }).closed;
  }

  populateFormFields(product) {
    this.updateProductForm.patchValue({
      productId: product.productId,
      productName: product?.productName,
      productPrice: product?.productPrice,
      discountPercent: product?.discountPercent,
      productStock: product?.productStock,
      productDescription: product?.productDescription,
      productIcon: product?.productIcon,
      productStatus: product?.productStatus,
      categoryId: product?.categoryId,
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.updateProductForm.valid)
      this.submitData(this.updateProductForm.value);
  }
  submitData(formData: any) {
    this.loadingService.enableLoading();
    this.productService.updateProduct(formData).subscribe(
      (response) => {
        this.loadingService.disableLoading();
        this.formModal.open('Successfully updated product with ID ' + response['productId'], '/admin/view')
        // this.message =
        // 'Successfully updated product with ID ' + response['productId'];
        // setTimeout(() => {
        //   this.router.navigateByUrl('/admin/view');
        // }, 3000);
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
    console.log('triggered');

    this.productIcon = image;
  }

  resetToDefault() {
    this.populateFormFields(this.product);
    this.productIcon = this.product.productIcon;
  }

  goBack() {
    this.location.back();
  }
}
