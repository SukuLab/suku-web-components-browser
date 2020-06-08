import { Component, OnInit, Input } from '@angular/core';
declare var dwolla: any;

@Component({
  selector: 'suku-dwolla-funding-source',
  templateUrl: './suku-dwolla-funding-source.component.html',
  styleUrls: ['./suku-dwolla-funding-source.component.scss']
})
export class SukuDwollaFundingSourceComponent implements OnInit {
  @Input('iav-token') iavtoken = 'FE9Goy2kh5sGYwPeIXA9yi6q6dTWOWcqVn83GkdYaws1kpUK5V' ;

  constructor() { }

  ngOnInit() {
  }

  getDwollaHtml() {
    console.log('triggered', this.iavtoken);
      dwolla.configure('sandbox');
      dwolla.iav.start(this.iavtoken, {
      container: 'iavContainer',
      stylesheets: [
        'https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext',

      ],
      microDeposits: true,
      backButton: true,
      fallbackToMicroDeposits: true
    }, function(err, res) {
      console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
    });
  }

}
