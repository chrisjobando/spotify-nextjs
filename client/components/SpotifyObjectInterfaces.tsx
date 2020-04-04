export interface ImageObject {
  height?: number | null;
  width?: number | null;
  url: string;
}

export interface ArtistObject {
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface AlbumObject {
  album_type: string;
  artists: ArtistObject[];
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: ImageObject[];
  name: string;
  release_data: string;
  release_data_precision: string;
  restrictions?: object;
  type: string;
  uri: string;
}

export interface SongObject {
  album: AlbumObject;
  artists: ArtistObject[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: object;
  external_urls: object;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
