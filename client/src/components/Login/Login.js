import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.scss'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeHandler = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(username + ' ' + password);
    }

    return (
        <div className={style.loginOverlay}>
            <article onClick={props.onClosing} className={style.loginCloseButtonWrapper}>
                <i className="fas fa-times"></i>
            </article>
            <form onSubmit={onSubmitHandler} className="form">
                <h1>Влез в профила си</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Потребител"
                    onChange={onChangeHandler}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Парола"
                    onChange={onChangeHandler}
                />
                <button>Вход</button>
                <Link to="/register" className={style.navToRegisterLink} onClick={props.onClosing}>Нямаш регистрация? Регистрирай се.</Link>
            </form>
        </div>
    );
}

export default Login;