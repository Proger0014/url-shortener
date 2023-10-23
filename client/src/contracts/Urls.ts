export interface CreateUrlRequest {
  shortUrl: string | null;
  targetUri: string;
}

export interface CreateUrlResponse {
  shortUrl: string;
  targetUri: string;
}

export interface GetUrlRequest {
  shortUrl: string;
}

export interface GetUrlResponse {
  shortUrl: string;
  targetUri: string;
}