import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
@Component({
  selector: 'recipe-helper-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  
  constructor(private httpClient: HttpClient){
    
  }
  public getRecipe () {    //https://www.supercook.com/#/desktop
    this.httpClient.post('', {}).subscribe();
  }
}
