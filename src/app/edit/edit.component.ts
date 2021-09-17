import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Api } from '../home/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input('item') item: any = null;
  @Output('update') update: EventEmitter<any> = new EventEmitter();

  title = '';

  constructor(private service: Api) {}

  ngOnInit(): void {
    this.title = this.item === null ? 'Crear' : 'Editar';
  }

  onEdit(form: any) {
    if (this.item === null) {
      this.service
        .create({
          date: new Date(),
          from: form.value.from,
          to: form.value.to,
          quantity: form.value.quantity,
          moneyType: form.value.moneyType,
          mineType: form.value.mineType,
          miner: form.value.miner,
        })
        .subscribe(() => {
          this.update.emit(this.item);
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
          this.update.emit(this.item);
        });
    }
  }
}
