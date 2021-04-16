import { Link } from 'react-router-dom';
import style from './Login.module.scss'
const Login = (props) => {
    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.username.value);
    }

    return (
        <div className={style.loginOverlay}>
            <article onClick={props.onClosing} className={style.loginCloseButtonWrapper}>
            <i className="fas fa-times"></i>
            </article>
            <form onSubmit={onSubmitHandler} className={style.form}>
                <h1>Влез в профила си</h1>
                <input type="text" name="username" placeholder="Потребител" />
                <input type="password" name="password" placeholder="Парола" />
                <button>Вход</button>
                <Link className={style.navToRegisterLink} to="/register">Нямаш регистрация? Регистрирай се.</Link>
            </form>
        </div>
    );
}

export default Login;