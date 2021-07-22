import { Injectable } from '@angular/core';
import { MYCLASSES } from 'src/assets/data/myClasses';
import { ClassInfo } from './classinfo';

@Injectable({
  providedIn: 'root'
})
export class MyclassdataService {

  constructor() { }

  loadMyClasses(): ClassInfo[] {
    return MYCLASSES;
  }
}
