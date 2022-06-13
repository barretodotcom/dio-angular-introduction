import { NgModule } from "@angular/core";
import { CodePipe } from "./Code.pipe";

@NgModule({
    declarations:[CodePipe],
    exports:[CodePipe]
})
export class CodePipeModule {}