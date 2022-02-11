import {environment} from '../../environments/environment';
import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
// @ts-ignore
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/budroid/ckwciqahg116v14l3rgnn8b9t';
  // lat = 0;
  // lng = 0;
  constructor() {
  }

  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: 19,
          center: [position.coords.longitude, position.coords.latitude - 0.00025]
        });
      }, e => {
        console.log(e);
      },
      {maximumAge: 1000, timeout: 10000, enableHighAccuracy: true});

    //this.map.addControl(new mapboxgl.NavigationControl());
  }
}
