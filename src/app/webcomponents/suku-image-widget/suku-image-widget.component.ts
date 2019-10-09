import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-image-widget',
  templateUrl: './suku-image-widget.component.html',
  styleUrls: ['./suku-image-widget.component.scss']
})
export class SukuImageWidgetComponent implements OnInit {
  @Input() imageSrc = 'https://resource.innovadatabase.com/admin/editor/c19a2d14-8aeb-4c14-b6bc-9a954c0d3363SUKU%20Logo.png';
  constructor() { }

  ngOnInit() {
  }

}
