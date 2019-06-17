import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'suku-users-widget',
  templateUrl: './suku-users-widget.component.html',
  styleUrls: ['./suku-users-widget.component.scss']
})
export class SukuUsersWidgetComponent implements OnInit {
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
    {
      userName: 'Alein',
      userNameId: 'Alein',
      userDesignation: 'Developer',
      userDesignationId: 'Developer',
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h6I3mMYRMYflFTvRQjSS8_vCTgC677yJaLnD8L0yaEiDH1e',
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
  ];
  @Input() iconSize = 22;
  @Input() iconColor = '';
  @Input() iconClass = '';

  @Input() userNameSize = '';
  @Input() userNameColor = '';
  @Input() userNameClass = '';

  @Input() userDesignationSize = '';
  @Input() userDesignationColor = '';
  @Input() userDesignationClass = '';

  @Input() userImgClass = 'img-default';
  @Input() widgetCustomClass = 'img-default';
  @Output() soacialAction = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
