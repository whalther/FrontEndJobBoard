import { Component, OnInit, } from '@angular/core';
import { JobCrudService } from '../../services/job-crud.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs:any = [];
  showEditComponent = false;
  showCreateComponent = false;
  showDetailComponent = false;
  constructor(private jcService : JobCrudService, private router: Router) { }

  ngOnInit() {    
    this.listJobs();
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
    this.showEditComponent = false;
    this.showCreateComponent = false;
    this.showDetailComponent = true;
    this.jcService.selectJob(this.jobs[i]);
  }
  goToCreateJob(){
    this.showEditComponent = false;
    this.showCreateComponent = true;
    this.showDetailComponent = false;
  }
  goToEditJob(i){
    this.showEditComponent = true;
    this.showCreateComponent = false;
    this.showDetailComponent = false;
    this.jcService.selectJob(this.jobs[i]);
  }
}
