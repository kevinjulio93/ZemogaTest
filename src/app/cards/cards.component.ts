import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { Celebrity } from 'src/assets/helpers/interfaces';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit {

  @Input() celebrity: Celebrity;
  @Input() index: number;
  @Output() voteEvent: EventEmitter<any> = new EventEmitter<any>();
  target: string;
  message: string;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  returnVotes(target: string): number {
    let percentage: number;
    const total: number = this.celebrity.agree + this.celebrity.desagree;

    switch (target) {
      case 'agree':
        percentage = total > 0 ? +((this.celebrity.agree * 100) / total).toFixed(1) : 50;
        return percentage;

      case 'desagree':
        percentage = total > 0 ? +((this.celebrity.desagree * 100) / total).toFixed(1) : 50;
        return percentage;

      default:
        break;
    }
  }

  setTarget(target: string): void {
    this.target = target;
  }

  vote(): void {
    if (this.target) {
      this.voteEvent.emit({vote: this.target, index: this.index});
    }
  }
}
