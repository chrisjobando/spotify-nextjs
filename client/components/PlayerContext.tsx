import { createContext } from 'react';

interface AppContextInterface {
  playerState: number;
  setPlayerState: (playerState: number) => void;
}

const PlayerContext = createContext<AppContextInterface | null>(null);

export default PlayerContext;
