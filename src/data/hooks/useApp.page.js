import { useState } from 'react';

const musicList = [
    {
        id: 1,
        name: 'Someone You Loved - Martin Garrix Remix',
        artists: ['Martin Garrix', 'Lewis Capaldi'],
        time: 216,
        url: 'music/Someone You Loved - Martin Garrix Remix.mp3',
        coverUrl:
            'https://i1.sndcdn.com/artworks-zFeWKq8iLVA5gcfK-TDSB3A-t500x500.jpg',
    },
    {
        id: 2,
        name: 'Creep (Radiohead Cover)',
        artists: ['KSHMR', 'RadioHead'],
        time: 242,
        url: 'music/KSHMR - Creep (Radiohead Cover).mp3',
        coverUrl:
            'https://i1.sndcdn.com/artworks-000194494845-7x03wb-t500x500.jpg',
    },
    {
        id: 3,
        name: 'Immortal (Original Mix)',
        artists: ['DVBBS', 'Tony Junior'],
        time: 302,
        url: 'music/DVBBS & Tony Junior - Immortal (Original Mix).mp3',
        coverUrl:
            'https://i1.sndcdn.com/artworks-000194494845-7x03wb-t500x500.jpg',
    },
    {
        id: 4,
        name: 'Castle On The Hill (NWYR Remix)',
        artists: ['Ed Sheeran', 'NWYR'],
        time: 213,
        url: 'music/Ed Sheeran - Castle On The Hill (NWYR Remix).mp3',
        coverUrl:
            'https://i1.sndcdn.com/artworks-000194494845-7x03wb-t500x500.jpg',
    },
    {
        id: 4,
        name: 'I Took A Pill in Ibiza (W&W Festival Mix)',
        artists: ['Mike Posner', 'W&W'],
        time: 184,
        url: 'music/Mike Posner I Took A Pill in Ibiza (W&W Festival Mix).mp3',
        coverUrl:
            'https://i1.sndcdn.com/artworks-000194494845-7x03wb-t500x500.jpg',
    },
];

export function useApp() {
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);

    function selectMusic(music) {
        setSelectedMusic(music);
        setTime(0);
    }

    function nextMusic() {
        const nextMusic =
            musicList[
                (musicList.indexOf(selectedMusic) + 1) % musicList.length
            ];
        selectMusic(nextMusic);
    }

    function prevMusic() {
        const prevMusic = musicList.at(musicList.indexOf(selectedMusic) - 1);
        selectMusic(prevMusic);
    }

    return {
        musicList,
        selectMusic,
        selectedMusic,
        time,
        setTime,
        nextMusic,
        prevMusic,
    };
}
