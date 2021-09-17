import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Api } from '../home/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input('item') item: any = null;

  title = '';

  constructor(
    private service: Api,
    public dialogRef: MatDialogRef<EditComponent>
  ) {}

  ngOnInit(): void {
    this.title = this.item === null ? 'Crear' : 'Editar';
  }

  onEdit(form: any) {
    if (this.item === null) {
      this.service
        .create({
          from: form.value.from,
          to: form.value.to,
          quantity: form.value.quantity,
          moneyType: form.value.moneyType,
          mineType: form.value.mineType,
          miner: form.value.miner,
        })
        .subscribe(() => {
          this.dialogRef.close();
        });
    } else {
      this.service
        .edit(this.item.key, {
          from: form.value.from,
          to: form.value.to,
          quantity: form.value.quantity,
          moneyType: form.value.moneyType,
          mineType: form.value.mineType,
          miner: form.value.miner,
        })
        .subscribe(() => {
          this.dialogRef.close();
        });
    }
  }
}
