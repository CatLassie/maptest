import { Component, OnInit } from '@angular/core';

import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-ol',
  templateUrl: './ol.component.html',
  styleUrls: ['./ol.component.css'],
})
export class OLComponent implements OnInit {
  map: any;

  constructor(/*private http: HttpClient*/) {}

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    console.log('map instance created:', this.map);
  }
}
