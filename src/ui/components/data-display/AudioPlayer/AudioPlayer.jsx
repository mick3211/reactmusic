import { useEffect, useMemo, useRef, useState } from 'react';
import TimeLine from '../../inputs/TimeLine/TimeLine';
import styles from './AudioPlayer.module.css';
import {
    FiSkipForward,
    FiSkipBack,
    FiPlay,
    FiPause,
    FiVolume,
} from 'react-icons/fi';

export default function AudioPlayer(props) {
    const [isPLaying, setIsPlaying] = useState(false),
        [canPlay, setCanPlay] = useState(false),
        [duration, setDuration] = useState(1),
        [currentTime, setCurrentTime] = useState(0),
        [volume, setVolume] = useState(1);

    const width = useMemo(() => {
        return (currentTime / duration) * 100;
    }, [duration, currentTime]);

    const audioRef = useRef(null);

    useEffect(() => {
        if (props.music) {
            setCurrentTime(0);
            setCanPlay(false);
        }
    }, [props.music]);

    useEffect(() => {
        if (props.music) {
            if (isPLaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPLaying, props.music]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(audioRef.current.currentTime);
        }, 500);

        return () => clearInterval(interval);
    }, [isPLaying]);

    function handleCanPLay() {
        setDuration(audioRef.current.duration);
        setCanPlay(true);
        setIsPlaying(true);
    }

    function handleEnded() {
        setIsPlaying(false);
        props?.onComplete();
    }

    function changeVolume(percent) {
        setVolume(percent / 100);
        audioRef.current.volume = percent / 100;
    }

    function changeTime(percent) {
        if (props.music) {
            audioRef.current.currentTime = (percent / 100) * duration;
        }
    }

    function handlePlay() {
        if (props.music) {
            setIsPlaying(!isPLaying);
        }
    }

    return (
        <div className={styles['player-container']}>
            <div>
                <span>
                    {props?.music?.name || 'Não há nada tocando no momento...'}
                </span>
            </div>
            <div className="grid grid-cols-[1fr_120px] items-center my-4">
                <div className="flex gap-4 items-center justify-center">
                    <FiSkipBack
                        className={styles['skip']}
                        onClick={() => props.onPrev()}
                    />

                    <button
                        type="button"
                        className={styles['play-button']}
                        disabled={!canPlay}
                        onClick={handlePlay}
                    >
                        {isPLaying ? <FiPause /> : <FiPlay />}
                    </button>

                    <FiSkipForward
                        className={styles['skip']}
                        onClick={() => props?.onNext()}
                    />
                </div>
                <div className="flex items-center">
                    <FiVolume
                        size={24}
                        className="cursor-pointer"
                        onClick={() => changeVolume(0)}
                    />
                    <TimeLine
                        width={volume * 100}
                        onChangeWidth={changeVolume}
                    />
                </div>
            </div>
            <TimeLine width={width} onChangeWidth={changeTime} />
            <audio
                src={props?.music?.url}
                ref={audioRef}
                className={styles['audio']}
                onCanPlay={handleCanPLay}
                onEnded={() => handleEnded()}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
            ></audio>
        </div>
    );
}
