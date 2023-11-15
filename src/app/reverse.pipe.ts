import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(string: string) {
    // return value.split('').reverse().join('');
      let newString = '';
      for (let i=string.length-1; i>=0; i--) {
        newString += string[i];
      }
      return newString
    }
    }

