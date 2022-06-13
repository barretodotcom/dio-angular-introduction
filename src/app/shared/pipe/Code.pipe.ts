import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'formatCode'})
export class CodePipe implements PipeTransform{
    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char,valueToReplace)
    }
}