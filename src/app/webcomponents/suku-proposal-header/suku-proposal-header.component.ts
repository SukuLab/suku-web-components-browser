import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'suku-proposal-header',
  templateUrl: './suku-proposal-header.component.html',
  styleUrls: ['./suku-proposal-header.component.scss']
})
export class SukuProposalHeaderComponent implements OnInit {
  _date;
  _enableTimer;
  @Input('label-one') labelOne = 'SUKU Improvement Proposal';
  @Input('label-one-Id') labelOneId = 'sukuImprovementProposal';
  @Input('label-two') labelTwo = 'Project Kickstarter';
  @Input('label-two-Id') labelTwoId = 'projectKickstarter';
  @Input() labelOneClass = '';
  @Input() labelTwoClass = '';
  @Input('content-one') contentOne = '- #003';
  @Input('content-one-Id') contentOneId = '';
  @Input() contentOneClass = 'count';
  @Input() contentTwo = '- Expires in XXXX Blocks';
  @Input() contentTwoId = 'expireBlocks';
  @Input() contentThreeId = ''
  @Input() ContentThreeStatus = 'Completed';
  @Input() labelThree = '';
  @Input() labelFour = '';
  @Input() contentTwoClass = '';
  @Input() customClass = '';
  @Input()
	get contentThree() {
		return this._date;
	}
	set contentThree(val) {
    console.log("val" ,val);
		this._date = val;
  }
  @Input()
	get enableTimer() {
		return this._enableTimer;
	}
	set enableTimer(val) {
		console.log(val);
		this._enableTimer = val;
	}
  constructor() { }

  ngOnInit() {
  }

}
