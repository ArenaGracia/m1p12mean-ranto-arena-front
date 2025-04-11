export class CategoryArticle {
  _id: string = '';
  name: string = '';
}

export class Article {
  _id: string = '';
  name: string = '';
  image: string = '';
  price: number = 0;
  category_article: CategoryArticle = new CategoryArticle();

  constructor() { }

}
