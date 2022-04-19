import { FiPlay } from 'react-icons/fi';
import { TimeService } from '../../../data/services/timeService';

export default function TMusicItem({ song, ...props }) {
    return (
        <li className="music-li hover:bg-neutral-900 py-2 px-8 transition-colors duration-100">
            <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] grid-rows-2 items-center gap-x-8 select-none truncate">
                <FiPlay
                    className="music-li-play row-span-2 cursor-pointer hover:text-green-400"
                    onClick={() => props.onSelect(song)}
                />
                <span className="li-index w-4 row-span-2 text-neutral-500">
                    {props.index}
                </span>
                <span
                    className={
                        song === props.selectedSong
                            ? 'text-green-400'
                            : 'text-text-primary'
                    }
                >
                    {song.name}
                </span>
                <span className="row-span-2 text-neutral-500 hidden sm:block">
                    {TimeService.timeDisplay(song.time)}
                </span>
                <span className="text-neutral-500 text-sm">
                    {song.artists.join(', ')}
                </span>
            </div>
        </li>
    );
}
