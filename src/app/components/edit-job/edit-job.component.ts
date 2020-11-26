import { Component, OnInit } from '@angular/core';
import { JobCrudService } from '../../services/job-crud.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  edited = false;
  constructor(public jcService : JobCrudService) { }

  ngOnInit() {
  }

  editJob(){
    this.jcService.updateJob().subscribe(q => {
      console.log(q);
      this.edited = true;
    });  
    console.log(this.jcService.jobSelected);
  }
}
