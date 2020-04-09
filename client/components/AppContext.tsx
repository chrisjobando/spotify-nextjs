import React, { createContext, useState } from 'react';

interface AppContextInterface {
  playerState: number;
  playerInfo: any | null;
  cleanMode: boolean | null;
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
  setClean: (cleanMode: boolean) => void;
}

export const AppContext = createContext<AppContextInterface | null>(null);

const AppContextProvider = props => {
  const [spotifyAccess, setSpotifyAccess] = useState('');
  const [playerState, setPlayerState] = useState(0);
  const [playerInfo, setPlayerInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [topTracks2, setTopTracks2] = useState(null);
  const [topTracks3, setTopTracks3] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topArtists2, setTopArtists2] = useState(null);
  const [topArtists3, setTopArtists3] = useState(null);
  const [cleanMode, setClean] = useState(false);

  return (
    <AppContext.Provider
      value={{
        spotifyAccess,
        setSpotifyAccess,
        playerState,
        setPlayerState,
        playerInfo,
        setPlayerInfo,
        userInfo,
        setUserInfo,
        topTracks,
        setTopTracks,
        topTracks2,
        setTopTracks2,
        topTracks3,
        setTopTracks3,
        topArtists,
        setTopArtists,
        topArtists2,
        setTopArtists2,
        topArtists3,
        setTopArtists3,
        cleanMode,
        setClean,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
