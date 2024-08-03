export interface BlogArticleSnippet {
  title: string;
  publicationDate: string;
  url: string;
  image?: string;
  imageAlt?: string;
  description?: string;
  author?: {
    id: string;
    name: string;
  };
  category?: {
    id: string;
    name: string;
  };
}
