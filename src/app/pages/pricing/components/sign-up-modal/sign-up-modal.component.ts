import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyErrorStateMatcher } from '@directives/MyErrorStateMatcher';
import { PATTERN_REGEX } from '@constants/pattern.constant';
import { MustMatch } from '@validators/must-match.validator';
import { BehaviorSubject } from 'rxjs';
import { RucValidator } from '@validators/ruc.validator';
import { SweetAlertService } from '@services/ui/sweet-alert.service';
import { UserService } from '@services/api/user/user.service';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModalComponent implements OnInit {

  form: FormGroup;
  errorMatcher = new MyErrorStateMatcher();
  rucData$ = new BehaviorSubject<any>(null);

  constructor(
    private dialogRef: MatDialogRef<SignUpModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private rucValidator: RucValidator,
    private sweetAlertService: SweetAlertService
  ) { }

  ngOnInit(): void {
    this.buildForm();

    const { idmodulo, idplan, idplandetalle } = this.data.item;

    this.f.idmodulo.patchValue(idmodulo);
    this.f.idplan.patchValue(idplan);
    this.f.idplandetalle.patchValue(idplandetalle);

    this.onChangeRucData();
  }

  get f(): {[key: string]: FormControl} {
    return this.form.controls as {[key: string]: FormControl};
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.userService.create(this.form.value)
        .subscribe(() => {
          this.sweetAlertService.confirm('Usuario registrado correctamente.', { showCancelButton: false })
            .then(({ isConfirmed }) => {
              if (isConfirmed) {
                this.dialogRef.close();
              }
            })
        });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      idmodulo: [null],
      idplan: [null],
      idplandetalle: [null],
      name: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', Validators.required],
      ruc: [
        '',
        [
          Validators.required,
          Validators.pattern(PATTERN_REGEX.NUMBERS),
          Validators.minLength(11),
        ],
        [this.rucValidator.exist(this.rucData$), this.rucValidator.unique()]
      ],
      razon: ['', Validators.required],
      direccion: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmarPassword')
    });
  }

  private onChangeRucData(): void {
    this.rucData$.subscribe(data => {
      let value = null;

      if (data) {
        value = data.nombrerazon; 
        const { nombrerazon, direccion } = data;  
        this.f.direccion.patchValue(direccion);     
      }

      this.f.razon.patchValue(value);
      this.f.razon.updateValueAndValidity();
    });
  }

}
