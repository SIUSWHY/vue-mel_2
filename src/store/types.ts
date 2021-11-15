export interface CardValue {
  id: string;
  img: string;
  title: string;
  text: string;
  viewCount: number;
  commentCount: number;
}

export interface BlogState {
  posts: CardValue[];
  error: string;
  loading: boolean;
}
