import styles from './TimeLine.module.css';

export default function TimeLine(props) {
    return (
        <div className="w-full h-2 rounded-sm relative bg-neutral-800 hover:h-3 transition-all duration-300">
            <div
                className={styles['timeline-line']}
                style={{ '--width': `${props.width}%` }}
            />
            <input
                type="range"
                className={styles['timeline-slider']}
                onChange={ev => props.onChangeWidth(ev.target.value)}
            />
        </div>
    );
}
