import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let stringfinal = "";
    let slength = value.length;
    for(let i=0; i<slength; i++){
      stringfinal =value[i]+ stringfinal;
    }   
    return stringfinal;
  }

}