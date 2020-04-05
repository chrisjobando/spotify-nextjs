import { createContext } from 'react';

interface AppContextInterface {
  playerState: number;
  playerInfo: any | null;
  userInfo: any | null;
  spotifyAccess: string;
  setPlayerState: (playerState: number) => void;
  setPlayerInfo: (playerInfo: any | null) => void;
  setUserInfo: (userInfo: any | null) => void;
  setSpotifyAccess: (spotifyAccess: string) => void;
}

const SpotifyContext = createContext<AppContextInterface | null>(null);

export default SpotifyContext;
