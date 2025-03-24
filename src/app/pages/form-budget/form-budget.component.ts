import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-budget',
  standalone: false,
  templateUrl: './form-budget.component.html',
  styleUrl: './form-budget.component.scss'
})
export class FormBudgetComponent {
  budgetForm: FormGroup = new FormBuilder().group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(6)]],
    company: ['', [Validators.required, Validators.minLength(3)]],
    budget: ['', [Validators.required, Validators.minLength(10)]]
  });

  get formControls() {
    return this.budgetForm.controls;
  }
}
