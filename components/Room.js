import styles from '../styles/Room.module.css';
import Light from './Light';

export default function Room(props) {
    const { room } = props;

    return (
        <div className={styles.room} style={room.style}>
            <div className={styles.room__content}>
                {room.children?.map(light => (
                    <Light key={light.id} light={light} />
                ))}
            </div>
        </div>
    );
}