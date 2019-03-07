import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suku-transaction-history',
  templateUrl: './suku-transaction-history.component.html',
  styleUrls: ['./suku-transaction-history.component.scss']
})
export class SukuTransactionHistoryComponent implements OnInit {
  @Input() transactionHistory = 'Transaction History'
  @Input() transactionDetailsId = 'transactionDetailsId';
  @Input() transactionDetails;
  @Input() headings;
  @Input() typeId = 'typeId';
  @Input() myAccountId = 'myAccountId';
  @Input() counterPartyId = 'counterPartyId';  @Input() counterparty = 'Counter Party';
  @Input() amountId = 'AmountId';
  @Input() statusId = 'statusId';
  @Input() dateCreatedId = 'dateCreatedId';
  @Input() paymentManagementId = 'paymentManagementId';
  @Output() action = new EventEmitter();
  @Input() cancelId = 'cancelId';
  @Input() cancel = 'Cancel';
  constructor() { }

  ngOnInit() {
    this.transactionDetails = [{
      'type': 'outgoing',
      'myAccount': 'Chase XXX',
      'counterParty': 'Logan',
      'amount': 500,
      'status': 'Complete',
      'dateCreated': '2/1/19'
    },
    {
      'type': 'outgoing',
      'myAccount': 'Chase XXX',
      'counterParty': 'Logan',
      'amount': 200,
      'status': 'Pending',
      'dateCreated': '2/1/19'
    },
    {
      'type': 'Incoming',
      'myAccount': 'Chase XXX',
      'counterParty': 'Logan',
      'amount': 100,
      'status': 'Failed',
      'dateCreated': '2/1/19'
    },
    {
      'type': 'outgoing',
      'myAccount': 'Chase XXX',
      'counterParty': 'Logan',
      'amount': 500,
      'status': 'Complete',
      'dateCreated': '2/1/19'
    },
    {
      'type': 'outgoing',
      'myAccount': 'Chase XXX',
      'counterParty': 'Logan',
      'amount': 200,
      'status': 'Pending',
      'dateCreated': '2/1/19'
    },
    {
      'type': 'Incoming',
      'myAccount': 'Chase XXX',
      'counterParty': 'Logan',
      'amount': 100,
      'status': 'Failed',
      'dateCreated': '2/1/19'
    }
    ];
    this.headings = [{
      'type': 'Type',
      'myAccount': 'My Account',
      'counterparty': 'Counter Party',
      'amount': 'Amount',
      'status': 'Stataus',
      'dateCreated': 'Date Created',
      'paymentManagement': 'Payment Management'
    }]
  }

}
