import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Api } from '../home/services/api.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  @Input('item') item: any;
  @Output('update') update: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
