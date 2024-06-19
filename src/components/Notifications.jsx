import '../assets/Styles.css'
import { useState } from 'react';

export default function Notifications(){
    const [unread, setToRead] = useState(true);
    const [num, setToZero] = useState(3);

    function markRead(){
        setToRead(false);
        setToZero(0);
    }

    return (
    <div class="main" role="main">
        <div className='top-section'>
            <h2>Notifications <span>{num}</span></h2>
            <button onClick={markRead}>Mark all as read</button>
        </div>
        <div className={unread ? "notification unread": "notification"}>
            <img src="./assets/images/avatar-mark-webber.webp" alt="" />
            <div>
                <p><span className='name-title'>Mark Webber</span> reacted to your recent post <span
                        className='name-title'>My first tournament today!</span> {unread && <span className='unread-dot'></span>}
                </p>
                <p>1m ago</p>
            </div>
        </div>
        <div className={unread ? "notification unread": "notification"}>
            <img src="./assets/images/avatar-angela-gray.webp" alt="" />
            <div>
                <p><span className='name-title'>Angela Gray</span> followed you {unread && <span className='unread-dot'></span>}
                </p>
                <p>5m ago</p>
            </div>
        </div>
        <div className={unread ? "notification unread": "notification"}>
            <img src="./assets/images/avatar-jacob-thompson.webp" alt="" />
            <div>
                <p><span className='name-title'>Jacob Thompson</span> has joined your group <span
                        className='name-title'>Chess Club</span> {unread && <span className='unread-dot'></span>}
                </p>
                <p>1 day ago</p>
            </div>
        </div>
        <div className="notification">
            <img src="./assets/images/avatar-rizky-hasanuddin.webp" alt="" />
            <div>
                <p><span className='name-title'>Rizky Hasanuddin</span> sent you a private message</p>
                <p>5 days ago</p>
                <p className='private-message'>
                    Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                    I'm already having lots of fun and improving my game.
                </p>
            </div>
        </div>
        <div className="notification">
            <img src="./assets/images/avatar-kimberly-smith.webp" alt="" />
            <div>
                <p><span className='name-title'>Kimberly Smith</span> commented on your picture</p>
                <p>1 week ago</p>
            </div>
            <div>
            <img src="./assets/images/image-chess.webp" alt="" />
            </div>
        </div>
        <div className="notification">
            <img src="./assets/images/avatar-nathan-peterson.webp" alt="" />
            <div>
                <p><span className='name-title'>Nathan Peterson</span> reacted to your recent post <span
                        className='name-title'>5 end-game strategies to increase your win rate</span>
                </p>
                <p>2 weeks ago</p>
            </div>
        </div>
        <div className="notification">
            <img src="./assets/images/avatar-kimberly-smith.webp" alt="" />
            <div>
                <p><span className='name-title'>Anna Kim</span> left the group <span className='name-title'>Chess
                        Club</span></p>
                <p>2 weeks ago</p>
            </div>
        </div>
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/duncan-chege">Duncan Chege</a>
        </div>
    </div>
    )
}