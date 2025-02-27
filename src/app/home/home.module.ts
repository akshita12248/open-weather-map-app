import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { FahrenheitPipe } from '../fahrenheit.pipe';
import { MomentPipe } from '../moment.pipe';
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        HomeComponent,
        FahrenheitPipe,
        MomentPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
