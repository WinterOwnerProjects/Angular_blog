import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../data/data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  
  constructor(private route:ActivatedRoute){}
  
  //Component Functions
  resume_text(text:string){
    let x: string = '';
    for(let i = 3; i < text.length || i < 101 ; i++){
      if(i < 101){
        x += text[i];
      } else {
        break;
      }
    }
    return `${x} [...]`;
  }
  countWords(str:string):any{
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
  }
  setValuesToComponent(post_slug:string|null): void{
    const result = Data.filter(post => post.post_slug == post_slug);
    console.log(result);
    if(result){
      result.forEach(post => {
        post.post_author == '' ? this.post_author = 'Anonymous' : this.post_author = post.post_author
        if (post.post_image == ''){
          this.post_photo = '../../../assets/blog-post-img-blue.jpg';
        } else{
          this.post_photo = post.post_image
        }
        this.post_title = post.post_title;
        this.post_date = post.post_date;
        this.post_content = post.post_content;
      });
      
    }
  }

  //Component Variables
  private post_slug:string | null = '';
  post_title?: string;
  post_date?: string;
  post_photo?: string;
  post_content?: string;
  post_author?: string;
  post_read_time?: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.post_slug = param.get('post_slug'))
    this.setValuesToComponent(this.post_slug)
    if(this.post_content){
      let num = this.countWords(this.post_content)
      num = num/200
      this.post_read_time = Math.floor(num)
    }
    
  }
}
