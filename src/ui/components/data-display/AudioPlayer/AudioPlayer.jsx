import { useEffect, useMemo, useRef, useState } from 'react';
import TimeLine from '../../inputs/TimeLine/TimeLine';
import styles from './AudioPlayer.module.css';
import { FiSkipForward, FiSkipBack, FiPlay, FiPause } from 'react-icons/fi';

export default function AudioPlayer(props) {
    const [isPLaying, setIsPlaying] = useState(false),
        [canPlay, setCanPlay] = useState(false),
        [duration, setDuration] = useState(1),
        [currentTime, setCurrentTime] = useState(0);

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
    });

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
                <span>{props?.music?.name}</span>
                <span> {'\u2022'}</span>
                <span> {props?.music?.artist}</span>
            </div>
            <div className={styles['button-container']}>
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
            <TimeLine width={width} onChangeWidth={changeTime} />
            <audio
                src={props?.music?.url}
                ref={audioRef}
                className={styles['audio']}
                onCanPlay={handleCanPLay}
                onEnded={() => handleEnded()}
            ></audio>
        </div>
    );
}
