
import { Injectable, OnInit} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService implements OnInit {


    constructor(private http: Http){

    }

    onAddServers(servers:any){
        const headers = new Headers({
            'Content-Type': 'application/json',
        })
        return this.http.put('https://angularcourse-2b2e2.firebaseio.com/data.json',servers,{'headers':headers});
    }

    ngOnInit(){
        
    }

    onGetAppName(){
        return this.http.get('https://angularcourse-2b2e2.firebaseio.com/appName.json').map(
            (response: Response)=>{
                return response.json()
            },
            (error: Response)=>console.log(error)
        );
    }

    onGetServers(){
        return this.http.get('https://angularcourse-2b2e2.firebaseio.com/data.json').map(
            (response: Response)=>{
                const data = response.json();
                for(const server of data){
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            }
        ).catch(
            (error: Response)=>{
                return Observable.throw(error);
            });
    }

}