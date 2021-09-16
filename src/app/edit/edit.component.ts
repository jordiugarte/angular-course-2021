import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Api } from '../home/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input('item') item: any;

  constructor(
    private service: Api,
    public dialogRef: MatDialogRef<EditComponent>
  ) {}

  ngOnInit(): void {}

  onEdit(form: any) {
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
