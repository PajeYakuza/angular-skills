import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  public cardLiked: boolean = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLike(card: any){
    card.likes += 1;
    this.httpClient.post('/api/skills', card).subscribe((ret: Array<any>) => console.log('ret', ret));
    this.cardLiked = true;
  }

  onShare(card: any){
    window.open('http://www.linkedin.com/in/pedroaugustotolentino/', '_blank');
    // TODO: abrir o link do seu linkedin
  }

}
