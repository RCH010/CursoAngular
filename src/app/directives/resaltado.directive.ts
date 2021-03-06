import { Directive, ElementRef , HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  
  constructor( private el:ElementRef) {
    console.log("directiva llamada");    
   }

   @Input("appResaltado") nuevocolor :string;

   @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevocolor || 'yellow');    
   }

   @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);  
   }

   private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
   }

}
