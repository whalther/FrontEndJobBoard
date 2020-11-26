import { Component, OnInit } from '@angular/core';
import { JobCrudService } from '../../services/job-crud.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs:any = [];
  constructor(private jcService : JobCrudService, private router: Router) { }

  ngOnInit() {
    this.listJobs();
  }
  createJob(){
    this.jcService.createJob().subscribe(q => {
      console.log(q);
    });  
  }

  listJobs(){
    this.jcService.listJobs().subscribe(q => {
      this.jobs = q.data.jobs;
      if(q.data.jobs.length > 0){
        this.goToJobDetail(0);
      }
      console.log(q);
    });  
  }

  goToJobDetail(i){    
    //this.router.navigate(['/job_detail'], { queryParams: { jobTitle: this.jobs[i].jobTitlePosition, jobNumber: this.jobs[i].jobNumber } }); 
    this.jcService.selectJob(this.jobs[i]);
  }
}
