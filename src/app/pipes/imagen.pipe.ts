import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

    transform(imagen: any): any {
      
      let notImage:string = 'assets/img/noimg.png';

      if(imagen === "null.null"){ 
        return  notImage;
      }else{
        return imagen;
      }

  }

}
