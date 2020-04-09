import React, { useState, useContext, useEffect } from 'react';
import Router from 'next/router';
import AppContext from '../AppContext';

// Interfaces
import { SongObject } from '../SpotifyObjectInterfaces';

// Components
import { MiniPlayer, BigPlayer } from './Players';

// API Call
import { getCurrentPlayback } from '../../actions/spotify';

const Player = () => {
  const [isPlay, setPlay] = useState<boolean>(false);
  const [isShuffle, setShuffle] = useState<boolean | null>(null);
  const [songData, setSongData] = useState<SongObject | null>(null);
  const [repeatState, setRepeat] = useState<number | null>(null);

  const {
    spotifyAccess,
    playerInfo,
    setPlayerInfo,
    playerState,
    setPlayerState,
  } = useContext(AppContext);

  useEffect(() => {
    if (spotifyAccess === '') {
      Router.push('/');
    }
  }, []);

  useEffect(() => {
    if (spotifyAccess !== '') {
      const checkPlayback = setInterval(() => {
        getCurrentPlayback(spotifyAccess).then(res => {
          if (res) {
            if (playerState === 0) {
              setPlayerState(1);
            }
            setSongData(res.item);
            setPlay(res.is_playing);
            setShuffle(res.shuffle_state);
            setRepeat(res.repeat_state);
          }
        });
      }, 3000);

      return () => clearInterval(checkPlayback);
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
                repeatState={repeatState}
                setRepeat={setRepeat}
                songData={songData}
              />
            );
          default:
            return <div />;
        }
      })()}
    </>
  );
};

export default Player;
