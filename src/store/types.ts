export interface CardValue {
  id: string;
  img: string;
  title: string;
  text: string;
  viewCount: number;
  commentCount: number;
  newDate: string;
}

export interface BlogState {
  posts: Array<CardValue>;
  error: null | any;
  loading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
