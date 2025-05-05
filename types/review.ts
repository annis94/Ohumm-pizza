export interface Review {
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
  reply?: string;
  replyDate?: string;
}