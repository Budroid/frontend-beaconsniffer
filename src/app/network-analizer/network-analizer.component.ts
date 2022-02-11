import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-network-analizer',
  templateUrl: './network-analizer.component.html',
  styleUrls: ['./network-analizer.component.scss']
})
export class NetworkAnalizerComponent {

  scanning = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  scan() {
    // this.scanning = true;
    // this.http.get('atr/testing')
    //   .map((response) => {
    //     console.log(response);
    //     return response.json();
    //   });
  }
}
