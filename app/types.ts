export interface Post {
  id: number;
  title: string;
}

export interface Comment {
  id: number;
  body: string;
  postId: number;
}
