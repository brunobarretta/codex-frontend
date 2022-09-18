import { Component, OnInit } from '@angular/core';
import { WorldClockModel } from 'src/app/models/world.clock.model';
import { WorldClockApiService } from 'src/app/services/world-clock-api.service';
import * as moment from 'moment';
moment.locale('en')

@Component({
  selector: 'app-world-clock',
  templateUrl: './world-clock.component.html',
  styleUrls: ['./world-clock.component.css']
})
export class WorldClockComponent implements OnInit {

  loading = false;
  serverData = '';

  constructor(
    private worldClockApiService: WorldClockApiService,
    public worldClockModel: WorldClockModel) { }

  ngOnInit(): void {
    this.loading = true;
    this.showTime();
  }

  showTime() {
    this.worldClockApiService.getTime()
      .subscribe((data: WorldClockModel) => this.worldClockModel = {
        currentDateTime: moment.utc(data.currentDateTime).format('LLL'),
        currentFileTime:  data.currentFileTime,
        dayOfTheWeek: data.dayOfTheWeek,
        isDayLightSavingsTime: data.isDayLightSavingsTime,
        ordinalDate: data.ordinalDate,
        serviceResponse: data.serviceResponse,
        timeZoneName: data.timeZoneName,
        utcOffset: data.utcOffset,
      });

      setTimeout(()=>{                       
        this.loading = false;
      }, 3000);
  }

  callServer() {
    this.worldClockApiService.getTimeServer()
      .subscribe((data) => {
        this.serverData = data.currentDateTime;
        console.log(data)
      });
  }


}
