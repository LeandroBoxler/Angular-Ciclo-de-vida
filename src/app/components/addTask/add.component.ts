import {AfterContentInit, Component, OnDestroy, OnInit} from "@angular/core";
import { log } from "console";

@Component ({
    selector: "app-addTask",
    templateUrl: "./add.component.html",
    styleUrl: "./add.component.css"
})

    export class AddComponent implements OnDestroy, AfterContentInit {
        // constructor(){
        //     console.log("creandose desde el construcotr")
        // }
        // ngOnInit(): void {
        //     console.log("crenado desde el oninit")
            
        // }
        ngOnDestroy(): void {
            console.log("el componente fue desturido");
            
        }

        ngAfterContentInit(): void {
            console.log("el contenido proyectado ah sido inicializado");
            
        }

    }