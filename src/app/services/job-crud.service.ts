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
    const  parametros = new  HttpParams()
    .set('texto', "hola");
    //const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get(environment.baseEndpoint+environment.listJobs);
  }
  createJob(jobTitle, jobDescription, jobDatePublish, jobDateExpiration):any{
    const data = {
      "jobTitlePosition": jobTitle,
      "jobDescription": jobDescription,
      "createdAt": jobDatePublish,
      "expiresAt": jobDateExpiration
    };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:4200'),  withCredentials: false };

    return this.http.post(environment.baseEndpoint+environment.createJob ,data ,config);
  }  
  selectJob(job){
    this.jobSelected = job;
    console.log('myjob',this.jobSelected);
  }
  updateJob():any{
    const data = {
      "jobNumber": this.jobSelected.jobNumber,
      "jobTitlePosition": this.jobSelected.jobTitlePosition,
      "jobDescription": this.jobSelected.jobDescription,
      "createdAt": this.jobSelected.createdAt,
      "expiresAt": this.jobSelected.expiresAt
    };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json'),  withCredentials: false };

    return this.http.post(environment.baseEndpoint+environment.updateJob ,data ,config);
  }    
}
