import Room from './Room';
import styles from '../styles/Home.module.css';

const HOME_ROOMS = [
    {
        id: 1,
        name: 'Badkamer',
        showName: true,
        style: {
            left: 0,
            bottom: '69px',
            border: '1px solid #FFFFFF',
            height: '70px',
            width: '120px',
        },
    },
    {
        id: 2,
        name: 'Slaapkamer 2',
        showName: true,
        style: {
            right: 0,
            bottom: 0,
            border: '1px solid #FFFFFF',
            borderTopWidth: 2,
            height: '140px',
            width: '116px',
        },
    },
    {
        id: 3,
        name: 'Slaapkamer',
        showName: true,
        style: {
            left: 0,
            borderTopWidth: 2,
            borderRightWidth: 2,
            bottom: '139px',
            border: '1px solid #FFFFFF',
            height: '160px',
            width: '121px',
            zIndex: 2,
        },
    },
    {
        id: 4,
        name: 'Bijkeuken',
        showName: true,
        style: {
            left: 0,
            bottom: 0,
            border: '1px solid #FFFFFF',
            height: '69px',
            width: '120px',
        },
    },
    {
        id: 5,
        name: 'Gang',
        showName: true,
        style: {
            left: '120px',
            bottom: 0,
            borderTopWidth: 2,
            border: '1px solid #FFFFFF',
            height: '140px',
            width: '60px',
        },
    },
    {
        id: 6,
        name: 'Woonkamer',
        showName: false,
        style: {
            left: 0,
            top: 0,
            right: 0,
            border: '1px solid #FFFFFF',
            height: '257px',
        },
    },
];

export default function Home(props) {
    const { lights, rooms } = props;
    const roomsWithLights = HOME_ROOMS.map(homeRoom => {
        const foundRoom = rooms.find(room => room.metadata.name === homeRoom.name);

        if (!foundRoom) return homeRoom;

        const children = foundRoom.children.map(foundRoomLight => {
            const foundLight = lights.find((light) => {
                return light.owner.rid === foundRoomLight.rid;
            })

            if (!foundLight) return null;

            return foundLight;
        });

        return {
            ...homeRoom,
            ...foundRoom,
            children,
        }
    });

    return (
        <div className={styles.home}>
            {roomsWithLights.map(room => (
                <Room key={room.id} room={room} />
            ))}
        </div>
    );
}
