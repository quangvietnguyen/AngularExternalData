import { Component, OnInit } from '@angular/core';
import { ClassInfo } from '../classinfo';
import { MyclassdataService } from '../myclassdata.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  myclasses: ClassInfo[] = [];
  constructor(private myService: MyclassdataService) { }

  ngOnInit(): void {
    this.loadMyClasses();
  }

  loadMyClasses(): void {
    this.myclasses = this.myService.loadMyClasses();
  }
}
