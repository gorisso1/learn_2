import React from "react";

export interface ForumProps{
    id:string;
    text:string;
}

export interface ForumsProps{
    data:ForumProps[] | null;
}


export interface GetForumsProps {
    forumData: ForumProps;

}

export interface ForumDataCreate {
    forumData: ForumProps[];
    setForumData: React.Dispatch<React.SetStateAction<ForumProps[] | null>>;
}

export interface CommentCreate {
    id:string;
    forum_id:string;
    text:string;
}

export interface CommentComponentProps {
    id: string;
}

export interface CommentDataCreate {
    CommentData: CommentCreate[];
    setCommentData: React.Dispatch<React.SetStateAction<CommentCreate[] | null>>;
    id:string;
}

export interface GetCommentProps {
    CommentData: CommentCreate;
}