import { Component, OnInit, Input, EventEmitter, ViewChild, Output } from '@angular/core';
import { NguCarousel, NguCarouselConfig, NguCarouselStore } from '@ngu/carousel';
@Component({
  selector: 'suku-list-proposal-choice-widget',
  templateUrl: './suku-list-proposal-choice-widget.component.html',
  styleUrls: ['./suku-list-proposal-choice-widget.component.scss']
})
export class SukuListProposalChoiceWidgetComponent implements OnInit {
  slideIndex = 4;
  dataSlideCount;
  screenWidth = screen.width;
  @Input() customLayoutClass = 'col pl-2 pr-2 pt-3 pb-0';
  @Input() subTitle = 'subTitle';
  @Input() titleStyle = 'subTitle';
  @Input() summeryStyle = 'subTitle';
  @Input() color = '';
  @Input() bgColor = 'rgba(196, 203, 216, 0.09)';
  @Input() footerbox = 'footerbox';
  @Input() teamMemberskey = 'teamMembersCustomArray';
  @Input() choiceOptions = [
    {
      voteCount: '203.5 Million',
      btnSecondry: 'More Information',
      btnPrimary: 'Voted',
      projectName: ' sample Project A',
      optionId: '1',
      optionSummary: 'text of an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      optionImg: 'https://s3-eu-west-1.amazonaws.com/farmplan-assets-live/sites/1/2019/02/Microsoft-logo_rgb_c-gray.png',
      optionImgId: 'image1',
      optionImgName: 'image1',
      IsBtnPrimary: false,
      teamMembersCustomArray: [
        {
          userName: 'Larry',
          userNameId: 'Larry',
          userDesignation: 'Project Manager',
          userDesignationId: 'Project Manager',
          userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmUpYYHhalvLQxph1FulRdB6yx-JLqee73jF1UM8FCE6prCve',
          userImgId: 'user1',
          socialMedia: [
            {
              name: 'telegram',
              link: 'xyz',
              icon: 'fa fa-telegram',
              id: 'telegram'
            },
            {
              name: 'twitter',
              link: 'xyz',
              icon: 'fa fa-twitter-square',
              id: 'twitter'
            },
            {
              name: 'linkedin',
              link: 'xyz',
              icon: 'fa fa-linkedin-square',
              id: 'linkedIn'
            },
            {
              name: 'github',
              link: 'xyz',
              icon: 'fa fa-github-alt',
            }
          ],
          path: '/userDashboard',
          disabled: false,
          id: 'user'
        }
      ]
    },
    {
      voteCount: '203.5 Million',
      btnSecondry: 'More Information',
      btnPrimary: 'Cast Vote',
      projectName: 'Project A',
      optionId: '1',
      optionSummary: 'text of an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      optionImg: 'https://s3-eu-west-1.amazonaws.com/farmplan-assets-live/sites/1/2019/02/Microsoft-logo_rgb_c-gray.png',
      optionImgId: 'image1',
      optionImgName: 'image1',
      IsBtnPrimary: false,
      teamMembersCustomArray: [
        {
          userName: 'Larry',
          userNameId: 'Larry',
          userDesignation: 'Project Manager',
          userDesignationId: 'Project Manager',
          userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmUpYYHhalvLQxph1FulRdB6yx-JLqee73jF1UM8FCE6prCve',
          userImgId: 'user1',
          socialMedia: [
            {
              name: 'telegram',
              link: 'xyz',
              icon: 'fa fa-telegram',
              id: 'telegram'
            },
            {
              name: 'twitter',
              link: 'xyz',
              icon: 'fa fa-twitter-square',
              id: 'twitter'
            },
            {
              name: 'linkedin',
              link: 'xyz',
              icon: 'fa fa-linkedin-square',
              id: 'linkedIn'
            },
            {
              name: 'github',
              link: 'xyz',
              icon: 'fa fa-github-alt',
            }
          ],
          path: '/userDashboard',
          disabled: false,
          id: 'user'
        }
      ]
    }
  ];

  @Input() teamMembers = [
    {
      userName: 'Larry',
      userNameId: 'Larry',
      userDesignation: 'Project Manager',
      userDesignationId: 'Project Manager',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmUpYYHhalvLQxph1FulRdB6yx-JLqee73jF1UM8FCE6prCve',
      userImgId: 'user1',
      socialMedia: [
        {
          name: 'telegram',
          link: 'xyz',
          icon: 'fa fa-telegram',
          id: 'telegram'
        },
        {
          name: 'twitter',
          link: 'xyz',
          icon: 'fa fa-twitter-square',
          id: 'twitter'
        },
        {
          name: 'linkedin',
          link: 'xyz',
          icon: 'fa fa-linkedin-square',
          id: 'linkedIn'
        },
        {
          name: 'github',
          link: 'xyz',
          icon: 'fa fa-github-alt',
        }
      ],
      path: '/userDashboard',
      disabled: false,
      id: 'user'
    },
    {
      userName: 'Larry',
      userNameId: 'Larry',
      userDesignation: 'Project Manager',
      userDesignationId: 'Project Manager',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmUpYYHhalvLQxph1FulRdB6yx-JLqee73jF1UM8FCE6prCve',
      userImgId: 'user2',
      socialMedia: [
        {
          name: 'telegram',
          link: 'xyz',
          icon: 'fa fa-telegram',
          id: 'telegram'
        },
        {
          name: 'twitter',
          link: 'xyz',
          icon: 'fa fa-twitter-square',
          id: 'twitter'
        },
        {
          name: 'linkedin',
          link: 'xyz',
          icon: 'fa fa-linkedin-square',
          id: 'linkedIn'
        },
        {
          name: 'github',
          link: 'xyz',
          icon: 'fa fa-github-alt',
        }
      ],
      path: '/userDashboard',
      disabled: false,
      id: 'user'
    },
    {
      userName: 'Alein',
      userNameId: 'Alein',
      userDesignation: 'Developer',
      userDesignationId: 'Developer',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h6I3mMYRMYflFTvRQjSS8_vCTgC677yJaLnD8L0yaEiDH1e',
      userImgId: 'user3',
      socialMedia: [
        {
          name: 'telegram',
          link: 'xyz',
          icon: 'fa fa-telegram',
          id: 'telegram'
        },
        {
          name: 'twitter',
          link: 'xyz',
          icon: 'fa fa-twitter-square',
          id: 'twitter'
        },
        {
          name: 'linkedin',
          link: 'xyz',
          icon: 'fa fa-linkedin-square',
          id: 'linkedIn'
        },
        {
          name: 'github',
          link: 'xyz',
          icon: 'fa fa-github-alt',
        }
      ],
      path: '/userDashboard',
      disabled: false,
      id: 'user'
    },
  ];
  @Input() iconSize = 14;
  @Input() iconColor = '';
  @Input() iconClass = '';

  @Input() userNameSize = '10';
  @Input() userNameColor = '';
  @Input() userNameClass = '';

  @Input() userDesignationSize = '8';
  @Input() userDesignationColor = '';
  @Input() userDesignationClass = '';

  @Input() userImgClass = 'img-default';
  @Input() widgetCustomClass = 'img-default';
  @Input() leftIconId = 'leftIconId';
  @Input() rightIconId = 'rightIconId';
  @Output() soacialAction = new EventEmitter();
  @Output() actionOne = new EventEmitter();
  @Output() actionTwo = new EventEmitter();
  public carouselTileItems;
  public carouselTile;

  @ViewChild('myCarousel') myCarousel: NguCarouselStore;
	carouselConfig: NguCarouselConfig = {
	  grid: { xs: 1, sm: 2, md: 2, lg: 3, all: 0 },
      slide: 3,
      speed: 400,
      point: {
        visible: false,
      },
      load: 3,
      touch: true,
      easing: 'ease'
    };

  constructor() { }

  ngOnInit() {
    if (this.choiceOptions.length < 4) {
      this.slideIndex = this.choiceOptions.length + 1;
    } else {
      this.slideIndex = 4;
    }
  }

  onClickLeft() {
    const rem = ((this.choiceOptions.length + 1) % 2);
    this.slideIndex = this.slideIndex - 2 - ((rem == 0) ? 2 : rem);
    console.log('slides--left');

  }

  onClickRight() {
    const rem = ((this.choiceOptions.length + 1) % 2);
    this.slideIndex = this.slideIndex + 2 + ((rem == 0) ? 2 : rem);
  }

}
