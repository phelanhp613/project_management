import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-circle',
  templateUrl: './progress-bar-circle.component.html',
  styleUrls: ['./progress-bar-circle.component.scss']
})
export class ProgressBarCircleComponent implements OnInit {
  @Input() progress: any = 0;
  @Input() width: any = 100;
  @Input() subTitle: any = '';
  color: any = '#0e94e3';
  subColor: any = 'rgba(0,158,250,0.2)'

  constructor() {}

  ngOnInit(): void {
    if(this.progress == 100) {
      this.color = '#0ad58a';
      this.subColor = 'rgba(15,229,82,0.37)';
    } else if(this.progress >= 50 && this.progress < 100) {
      this.color = '#3aa2fa';
      this.subColor = 'rgba(0,131,255,0.31)';
    } else if(this.progress >= 25 && this.progress < 50) {
      this.color = '#FFBA00';
      this.subColor = 'rgba(255,200,51,0.59)';
    } else {
      this.color = '#FF2700';
      this.subColor = 'rgba(255,101,76,0.5)';
    }
  }
}
