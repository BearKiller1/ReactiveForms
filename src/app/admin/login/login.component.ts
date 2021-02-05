import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg:any;

  constructor(
    private Obj:DataService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {}

  log(user:any){
    var checker = this.Obj.Login(user.username,user.password);
    if(checker){
      this.router.navigate(['../dashboard'],{relativeTo:this.route})
    }
    else{
      this.msg = "Username or password is incorrect";
    }
  }
}
