import { createContext } from 'react';

interface AppContextInterface {
  playerState: number;
  playerInfo: object | null;
  setPlayerState: (playerState: number) => void;
  setPlayerInfo: (playerInfo: object | null) => void;
}

const PlayerContext = createContext<AppContextInterface | null>(null);

export default PlayerContext;
