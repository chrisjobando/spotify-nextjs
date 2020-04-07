import { createContext } from 'react';

interface AppContextInterface {
  playerState: number;
  playerInfo: any | null;
  userInfo: any | null;
  topTracks: any[] | null;
  topTracks2: any[] | null;
  topTracks3: any[] | null;
  topArtists: any[] | null;
  topArtists2: any[] | null;
  topArtists3: any[] | null;
  spotifyAccess: string;
  setPlayerState: (playerState: number) => void;
  setPlayerInfo: (playerInfo: any | null) => void;
  setUserInfo: (userInfo: any | null) => void;
  setSpotifyAccess: (spotifyAccess: string) => void;
  setTopTracks: (topTracks: any[]) => void;
  setTopTracks2: (topTracks: any[]) => void;
  setTopTracks3: (topTracks: any[]) => void;
  setTopArtists: (topArtists: any[]) => void;
  setTopArtists2: (topArtists: any[]) => void;
  setTopArtists3: (topArtists: any[]) => void;
}

const AppContext = createContext<AppContextInterface | null>(null);
export default AppContext;
