import React, { useState, useContext, useEffect } from 'react';
import Router from 'next/router';
import PlayerContext from '../PlayerContext';

// Interfaces
import { SongObject } from '../SpotifyObjectInterfaces';

// Components
import { MiniPlayer, BigPlayer } from './Players';

export default () => {
  const [isPlay, setPlay] = useState<boolean>(false);
  const [isShuffle, setShuffle] = useState<boolean | null>(null);
  const [songData, setSongData] = useState<SongObject | null>(null);
  const {
    setPlayerInfo,
    playerInfo,
    spotifyAccess,
    playerState,
    setPlayerState,
  } = useContext(PlayerContext);

  useEffect(() => {
    if (spotifyAccess === '') {
      Router.push('/');
    }
  }, []);

  useEffect(() => {
    if (playerInfo) {
      setSongData(playerInfo.item);
      setPlay(playerInfo.is_playing);
    }
  }, [playerInfo]);

  return (
    <>
      {(() => {
        switch (playerState) {
          case 1:
            return (
              <MiniPlayer
                onClick={() => setPlayerState(2)}
                access={spotifyAccess}
                isPlay={isPlay}
                setPlay={setPlay}
                songData={songData}
                setSongData={setSongData}
                playerInfo={playerInfo}
                setPlayerInfo={setPlayerInfo}
              />
            );
          case 2:
            return (
              <BigPlayer
                onClick={() => setPlayerState(1)}
                access={spotifyAccess}
                isPlay={isPlay}
                setPlay={setPlay}
                isShuffle={isShuffle}
                setShuffle={setShuffle}
                songData={songData}
                setSongData={setSongData}
                playerInfo={playerInfo}
                setPlayerInfo={setPlayerInfo}
              />
            );
          default:
            return <div />;
        }
      })()}
    </>
  );
};
