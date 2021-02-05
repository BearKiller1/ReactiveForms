import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  idCounter:any;
  data = [
    {id:1, user:'1', pwd:'1'}
  ];

  constructor() { }
  
  AddUser(username:any,pwd:any){
    for( var i = 0; i !=this.data.length; i++){
      this.idCounter = this.data[i]['id'];
    }
    this.idCounter++;
    
    this.data.push({id:this.idCounter, user:username, pwd:pwd});
    console.log(this.data);
  };

  Login(user:any, pwd:any): any{
    for( var i = 0; i !=this.data.length; i++){
      if(user == this.data[i]['user'] && pwd == this.data[i]['pwd'])
        return true;
      else
        return false;
    };
  };

}
