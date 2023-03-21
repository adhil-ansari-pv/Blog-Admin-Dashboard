import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {

  postArray!:Array<any>

  constructor(private postService:PostsService){

  }
  ngOnInit(): void {
    this.postService.loadData().subscribe(val =>{
      this.postArray = val

    })
  }

  onDelete(postImgPath:string, id:Params){
    this.postService.deleteImage(postImgPath,id)
  }

  onFeatured(id:Params,value:boolean){
    const featuredData = {
      isFeatured : value
    }
    this.postService.markFeatured(id,featuredData)
  }

}
