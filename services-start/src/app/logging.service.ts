
export class LoggingService {
    counter: number = 0;
    log(msg: string){
        console.log(this.counter+' Log message '+msg);
        this.counter++;
    }

}