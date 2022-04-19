import AudioPlayer from '../components/data-display/AudioPlayer/AudioPlayer';
import { useContext } from 'react';
import { AppContext } from '../../App';
import TMusicList from '../components/TMusicList/TMusicList';
import TMusicItem from '../components/TMusicList/TMusicItem';

export default function Index() {
    const { musicList, selectMusic, selectedMusic, nextMusic, prevMusic } =
        useContext(AppContext);

    return (
        <div className="flex flex-col h-[calc(100vh-84px)] justify-between">
            <div className="overflow-y-auto">
                <h3 className="ml-8 text-xl text-neutral-200 mb-2">Músicas</h3>
                <TMusicList>
                    {musicList.map((song, index) => (
                        <TMusicItem
                            key={song.id}
                            song={song}
                            onSelect={selectMusic}
                            selectedSong={selectedMusic}
                            index={index + 1}
                        />
                    ))}
                </TMusicList>
            </div>

            <AudioPlayer
                music={selectedMusic}
                onNext={nextMusic}
                onPrev={prevMusic}
                onComplete={nextMusic}
            />
        </div>
    );
}
