import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;
  imgUrl: string;
  author: string;
  download_url: string;
  id: number;
  constructor() { }

  ngOnInit(): void {
    this.author = this.user.author;
    this.download_url = this.user.download_url;
   /*  this.imgUrl = this.user._links.avatar.href; */
    this.id = this.user.id;
  }

}
