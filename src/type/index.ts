export interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}


export interface Message {
  _id: string;
  sender: string;
  content: string;
  timestamp: string;
}
