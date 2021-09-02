import { Component, OnInit } from '@angular/core';
import { CreatescreenService } from './createscreen.service';

@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss'],
})

export class CreatescreenComponent implements OnInit {
    public sample = {
        Name: '',
        Email: '',
    }

    constructor (
        private createscreenService: CreatescreenService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createscreenService.GpCreate(this.sample).subscribe(data => {
            this.sample.Name = ''
 	 	this.sample.Email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}