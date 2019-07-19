import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }


  onVote(valeur: number) {
    this.loveIts = this.loveIts + valeur;
  }


  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    }
  }
}
