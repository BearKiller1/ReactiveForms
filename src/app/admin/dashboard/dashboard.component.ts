import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  msg:any;

  constructor(private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.msg = this.route.snapshot.paramMap.get('msg');
  }

}
