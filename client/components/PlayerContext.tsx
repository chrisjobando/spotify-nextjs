import { createContext } from 'react';

interface AppContextInterface {
  playerState: number;
  playerInfo: any | null;
  spotifyAccess: string;
  setPlayerState: (playerState: number) => void;
  setPlayerInfo: (playerInfo: any | null) => void;
  setSpotifyAccess: (spotifyAccess: string) => void;
}

const PlayerContext = createContext<AppContextInterface | null>(null);

export default PlayerContext;
