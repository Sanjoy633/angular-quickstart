import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}} {{hero.id}}!</h1>'
})
export class AppComponent {
  name = 'Sanjoy';
  hero:Hero ={
 id: 1,
 name:'Rk'

  };
 }
 export class Hero {
  id: number;
  name: string;
}