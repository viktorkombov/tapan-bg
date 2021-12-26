import style from './Register.module.scss'
import * as userService from '../../services/userService'
import { Component } from 'react';

class Register extends Component {


    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            name: '',
            surname: '',
            profilePicture: '',
            password: '',
            repeatPassword: ''
        }
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitHandler(e) {
        e.preventDefault();
        console.log(this.state)
        userService.register(this.state).then(res => console.log(res))
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler.bind(this)} className={`form ${style.registerForm}`}>
                <h1 className={style.registerHeading}>Регистрирай се</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Потребител"
                    onChange={this.onChangeHandler.bind(this)}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Име"
                    onChange={this.onChangeHandler.bind(this)}
                />
                <input
                    type="text"
                    name="surname"
                    placeholder="Фамилия"
                    onChange={this.onChangeHandler.bind(this)}
                />
                <input type="text"
                    name="profilePicture"
                    placeholder="Постави линк за профилната си снимка"
                    onChange={this.onChangeHandler.bind(this)}
                />
                <input type="password"
                    name="password"
                    placeholder="Парола"
                    onChange={this.onChangeHandler.bind(this)}
                />
                <input type="password"
                    name="repeatPassword"
                    placeholder="Повтори паролата"
                    onChange={this.onChangeHandler.bind(this)}
                />
                <button className="button">Регистрирай се</button>
                {/* <Link className={style.navToRegisterLink} to="/register">Нямаш регистрация? Регистрирай се.</Link> */}
            </form>
        );
    }
}

export default Register;