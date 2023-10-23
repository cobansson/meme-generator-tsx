export interface Meme {
    topText: string;
    bottomText: string;
    randomImage: string;
  }

export interface MemeData {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}