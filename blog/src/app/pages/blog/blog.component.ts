import { Component, OnInit, OnChanges} from '@angular/core';
import { Data } from '../../data/data'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  
  constructor(){}

  //functions
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

  //variables
  posts:any;

  //Components Cycles
  ngOnInit(): void {
    this.posts = Data;
    this.posts.forEach((post:any):void => {
      if(post.post_image == ""){
        post.post_image = 'http://localhost:4200/assets/blog-post-img-blue.jpg';
      }
      post.post_resume = this.resume_text(post.post_content);
      let num = parseInt(this.countWords(post.post_content))
      num = num/200
      post.read_time = Math.floor(num)
    });
    
    console.log(this.posts)
  };
  
}
