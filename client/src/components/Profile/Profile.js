import style from './Profile.module.scss';
import profilePicture from '../../images/2.jpg'
import InterestingFacts from '../InterestingFacts'
import { useEffect } from 'react';

const Profile = (props) => {

    useEffect(() => {
        console.log(props)
    },[])

    return (
        <div className={style.profile}>
            <section className={style.userDataWrapper}>
                <article className={style.userPictureWrapper}>
                    <img src={props.user?.profilePicture} alt="Снимка"/>
                </article>
                <article>
                    <h1 className={style.userUserName}>{props.user?.username}</h1>
                    <h3 className={style.userFullName}>{`${props.user?.name} ${props.user?.surname}`}</h3>
                    <button className="button">Редактиране</button>
                </article>
            </section>
            <h2>Публикувани статии</h2>
            <InterestingFacts/>
        </div>
    );
}

export default Profile;