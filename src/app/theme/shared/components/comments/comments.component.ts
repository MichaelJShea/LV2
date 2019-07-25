import { Component, OnInit, Input } from '@angular/core';
import {AgreementService } from '../../../../LV/services/agreement-service/agreement.service'
import {AgreementComment} from '../../../../LV/models/agreements/agreement-comment'
import  * as moment from 'moment';
import { formatDate } from '@angular/common';
import { Agreement } from 'src/app/LV/models/agreements/agreement';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() ID: Number;

  private UserID;
  private Comments;
  private newComment:AgreementComment;
  private commentToEdit: AgreementComment; 
  private commentText;
  private thereAreComments: Boolean; 
  

  constructor( private _agreementService: AgreementService) { 
    this.newComment = new AgreementComment;
    this.commentText = null;
    this.UserID = 0;
    this.thereAreComments= false;
    this.commentToEdit = new AgreementComment;


  }

  ngOnInit() {
    console.log("INPUT",this.ID)
    this.newComment.AgreementID = this.ID
    this.newComment.CreatedBy = "Michael";
    this.newComment.ModifiedBy = "MSHEA";
    this.getComments(this.ID);
  }

  getComments(id: Number){
    console.log(this.newComment)
    let comments = this._agreementService.getAgreementComments(id);
    comments.subscribe(data => {
      for(var comment in data ){
        var createdAt = this.dateFormatter(comment['CreatedAt']);
        console.log(createdAt);
        data[comment]['CreatedDate'] = createdAt;
      }
      this.Comments = data;
      console.log("Got Comments:", this.Comments)
      if(this.Comments.length > 0){
        this.thereAreComments = true; 
      }
    })
  }

  getComment(id:Number, commentId: Number){
    let comment = this._agreementService.getAgreementComment(id, commentId);
    comment.subscribe((data: AgreementComment) => {
      this.commentToEdit = data;
      console.log("Got Comment", this.commentToEdit);
    })
  }

  createComment(id: Number = this.ID, comment =  this.newComment, text = this.commentText, userId = this.UserID){
    comment.AgreementCommentText = text;
    console.log("Comment Being Created", comment);
    let newComment = this._agreementService.createAgreementComment(id, comment, userId);
    newComment.subscribe(data => {
      console.log(data);
      this.newComment.AgreementCommentText = ""; 
      this.getComments(id);
    })
  }

  editComment(id:Number, comment: AgreementComment){

  }

  deleteComment(agreementId: Number, commentId: Number){
    let deleteComment = this._agreementService.deleteAgreementComment(agreementId ,commentId);
    console.log(deleteComment)
    deleteComment.subscribe(data => {
      console.log("Comment Been Did DELETED", data);
      this.getComments(agreementId);
    })
  }
  
  dateFormatter(dateString){
    var date = moment(dateString).format('LLLL');
    return date;
  }

  humanizeDate(dateString){
    var date = moment.duration(-dateString, "minutes").humanize(true);
  }

}
