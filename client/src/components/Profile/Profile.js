import style from './Profile.module.scss';
import profilePicture from '../../images/2.jpg'
import InterestingFacts from '../InterestingFacts'

const Profile = (props) => {


    return (
        <div className={style.profile}>
            <section className={style.userDataWrapper}>
                <article className={style.userPictureWrapper}>
                    <img src={profilePicture} alt="Снимка"/>
                </article>
                <article>
                    <h1 className={style.userUserName}>vKombov</h1>
                    <h3 className={style.userFullName}>Виктор Комбов</h3>
                    <button>Редактиране</button>
                </article>
            </section>
            <h2>Публикувани статии</h2>
            <InterestingFacts/>
        </div>
    );
}

export default Profile;