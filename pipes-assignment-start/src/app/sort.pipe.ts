import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    'name':'sort',
    'pure': false,
})
export class SortPipe implements PipeTransform {

    transform(value: any, propName: string){
        let vals =  value.sort((a,b)=>{
            if(a[propName]<b[propName]){
                return -1;
            }
            if(a[propName]>b[propName]){
                return 1;
            }
            return 0;
        });
        return vals.reverse();
    }

}