import { useState } from 'react';

const musicList = [
    {
        id: 1,
        name: 'Someone You Loved - Martin Garrix Remix',
        artist: 'Martin Garrix',
        time: 216,
        url: 'music/Someone You Loved - Martin Garrix Remix.mp3',
    },
    {
        id: 2,
        name: 'KSHMR - Creep (Radiohead Cover)',
        artist: 'KSHMR',
        time: 242,
        url: 'music/KSHMR - Creep (Radiohead Cover).mp3',
    },
];

export function useApp() {
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);

    function selectMusic(music) {
        setSelectedMusic(music);
        setTime(0);
    }

    return { musicList, selectMusic, selectedMusic, time, setTime };
}
