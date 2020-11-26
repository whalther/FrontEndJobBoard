import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobCrudService {
  jobSelected:any= [];

  constructor(private http: HttpClient) {}

  listJobs():any{
    const data = {
      "jobTitlePosition": "Dev from angular",
      "jobDescription": "my angular desc",
      "createdAt": "2020-11-26T04:50:34.249Z",
      "expiresAt": "2020-11-30T04:50:34.249Z"
    };
    const  parametros = new  HttpParams()
    .set('texto', "hola");
    //const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get(environment.baseEndpoint+environment.listJobs);
  }
  createJob():any{
    const data = {
      "jobTitlePosition": "Dev from angular",
      "jobDescription": "my angular desc",
      "createdAt": "2020-11-26T04:50:34.249Z",
      "expiresAt": "2020-11-30T04:50:34.249Z"
    };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(environment.baseEndpoint+environment.createJob , data, config);
  }  
  selectJob(job){
    this.jobSelected = job;
    console.log('myjob',this.jobSelected);
  }
}
