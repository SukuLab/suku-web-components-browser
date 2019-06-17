import { Component, OnInit, Input } from '@angular/core';
import { SukuGovernanceWebcomponentsService } from '../suku-governance-webcomponents.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'suku-list-proposal-header',
  templateUrl: './suku-list-proposal-header.component.html',
  styleUrls: ['./suku-list-proposal-header.component.scss']
})
export class SukuListProposalHeaderComponent implements OnInit {
  @Input() customLayoutClass = 'col p-4 bg';
  @Input() subTitleClass = 'subTitle text-white';
  @Input() color = '';

  @Input() titleOne = 'SUKU IMPROVEMENT';
  @Input() titleOneId = 'SUKU IMPROVEMENT';
  @Input() titleTwo = 'PROPOSAL';
  @Input() titleTwoId = 'PROPOSAL';
  @Input() customTitleClass = '';

  @Input() subTitleOne = '#003';
  @Input() subTitleOneId = '#003';
  @Input() subTitleOneClass = '';
  @Input() subContentOne = 'Project Kickstarter';
  @Input() subContentOneId = 'Project Kickstarter';

  @Input() subTitleTwo = 'expiration';
  @Input() subTitleTwoId = 'expiration';
  @Input() subTitleTwoClass = '';
  @Input() subContentTwo = '20154 Blocks';
  @Input() subContentTwoId = '20154 Blocks';

  @Input() subTitleThree = 'outline';
  @Input() subTitleThreeId = 'outline';
  @Input() subTitleThreeClass = '';

  @Input() description = `It is a long established fact that a reader will be distracted by the
 readable content of a
 page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
 distribution
 of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop
 publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
 'lorem
 ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
 sometimes
 by accident, sometimes on purpose (injected humour and the like).`;
  @Input() descriptionId = 'descriptionId';
  @Input() descriptionClass = 'description';
  constructor() { }
  ngOnInit() {
  }

}
