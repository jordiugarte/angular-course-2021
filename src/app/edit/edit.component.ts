import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Api } from '../home/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Input('item') item: any;

  constructor(
    private service: Api,
    public dialogRef: MatDialogRef<RegisterComponent>
  ) {}

  ngOnInit(): void {}

  onEdit(form: any) {
    var newItem = this.item;
    this.service.edit(this.item.key, newItem).subscribe(() => {
      this.dialogRef.close();
      
    });
  }
}
