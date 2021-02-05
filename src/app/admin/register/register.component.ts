import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  msg:any;

  constructor(
    private Obj:DataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.msg = this.route.snapshot.paramMap.get('msg');
  }

  register(user:any){
    if(user.repeat == user.password){
      this.Obj.AddUser(user.username, user.password);//adding user
      var msg = "You registered now you can use admin panel dashboard";//sending to dashboard
      this.router.navigate(//navigate dashboard
        ['../dashboard',msg],
        {relativeTo:this.route}
      );
    }
    else{
      var msg = "Registration Failed pleas try again";

      this.router.navigate(//navigate back and msg for failing and tryhing again
        ['../register', msg],
        {relativeTo:this.route}
      );
    };
  }
}
