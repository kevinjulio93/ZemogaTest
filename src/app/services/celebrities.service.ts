import { Injectable } from '@angular/core';
import { Celebrity } from '../../assets/helpers/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CelebritiesService {

  celebrities: Array<Celebrity> = [
    {
      title: 'Kaney West',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      agree: 0,
      desagree: 0,
      time: '1 month',
      section: 'Entertainment',
      image: 'kaney.png'
    },
    {
      title: 'Mark Zuckerberg',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      agree: 0,
      desagree: 0,
      time: '1 month',
      section: 'Bussines',
      image: 'mark.png'
    },
    {
      title: 'Cristina Fernández de Kirchner',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      agree: 0,
      desagree: 0,
      time: '1 month',
      section: 'Politics',
      image: 'christina.png'
    },
    {
      title: 'Malala Yousafzai',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      agree: 0,
      desagree: 0,
      time: '1 month',
      section: 'Entertainment',
      image: 'malala.png'
    }
  ];
  constructor() { }

  getCelebrities(): Array<any> {
    const celebrities = JSON.parse(localStorage.getItem('celebrities'));
    if (celebrities) {
      return celebrities;
    } else {
      return this.celebrities;
    }
  }

  saveCelebrities(Celebrities: Array<any>) {
    const celebrities = JSON.stringify(Celebrities);
    localStorage.setItem('celebrities', celebrities);
  }
}
