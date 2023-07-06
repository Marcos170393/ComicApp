import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLengthPipe'
})
export class TextLengthPipePipe implements PipeTransform {

  transform(value: string): string {
    const maxSize : number = 12;
    if(value.length > maxSize){
      return value.slice(0,maxSize)+'...'
    }

    return value;
  }

}
