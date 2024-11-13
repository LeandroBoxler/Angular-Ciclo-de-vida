import { AfterViewInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck {
  // ngAfterViewInit(): void {
  //   console.log("han sido inicializadas las vistas del complemento y las vistas hijas")}
  
  // Destroy: boolean = true

  // countDown: number;
  // intervalId: any;

  // constructor(){
  //   this.countDown = 10;
  //   this.intervalId = setInterval(()=>{
  //     this.countDown--;
  //     if (this.countDown === 0) {
  //       clearInterval(this.intervalId)
  //       this.Destroy =false
        
  //     }

  //   },1000
      
  //   )
  // }
  value: number =0
  previusValue: number =0
  changeDetected: boolean = false

  updateValue(): void{
    this.value++
    setInterval(()=>{
      this.changeDetected = false
    },2000)
  }
  ngDoCheck(): void {
    if (this.value !== this.previusValue) {
      this.changeDetected=true
      this.previusValue = this.value
      
    }
  }
}