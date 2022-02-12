import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.scss'
import * as userService from '../../services/userService'
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';

const Login = (props) => {
    const context = useContext(GlobalContext);
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
        userService.login({ username, password }).then(res => {
            if (res?.name) {
                context.setUser(context.user = res);
                closeLogin();
            }
        })
    }

    function closeLogin() {
        context.useOpenLogin(context.openLogin = false);
    }

    return (
        <div className={style.loginOverlay}>
            <article onClick={closeLogin}  className={style.loginCloseButtonWrapper}>
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
                <button className="button">Вход</button>
                <Link to="/register" className={style.navToRegisterLink} onClick={props.onClosing}>Нямаш регистрация? Регистрирай се.</Link>
            </form>
        </div>
    );
}

export default Login;