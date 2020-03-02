import { Component, OnInit } from '@angular/core';
import { CelebritiesService } from '../services/celebrities.service';
import { Celebrity } from 'src/assets/helpers/interfaces';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  celebrities: Array<Celebrity>;
  closeMessage: boolean;
  constructor(private cs: CelebritiesService) {

  }

  ngOnInit(): void {
    this.celebrities = this.cs.getCelebrities();
    this.closeMessage =  false;
  }

  vote(celebritiy: any) {
    const id = celebritiy.index;
    const vote = celebritiy.vote;

    switch (vote) {
      case 'agree':
        this.celebrities[id] = {
          ...this.celebrities[id],
          agree: this.celebrities[id].agree + 1
        };
        break;

      case 'desagree':
        this.celebrities[id] = {
          ...this.celebrities[id],
          desagree: this.celebrities[id].desagree + 1
        };
        break;

      default:
        break;
    }
    this.cs.saveCelebrities(this.celebrities);
  }

  closeMessageFn() {
    this.closeMessage = true;
  }
}
