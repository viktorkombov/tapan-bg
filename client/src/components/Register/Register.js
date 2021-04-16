import style from './Register.module.scss'

const Register = (props) => {


    return (
        <form onSubmit={onSubmitHandler} className={style.form}>
            <h1>Регистрирай се</h1>
            <input type="text" name="username" placeholder="Потребител" />
            <input type="text" name="name" placeholder="Име" />
            <input type="text" name="surname" placeholder="Фамилия" />
            <input type="text" name="profilePicture" placeholder="Постави линк за профилната си снимка" />
            <input type="password" name="password" placeholder="Парола" />
            <input type="password" name="repeatPassword" placeholder="Повтори паролата" />
            <button>Регистрирай се</button>
            {/* <Link className={style.navToRegisterLink} to="/register">Нямаш регистрация? Регистрирай се.</Link> */}
        </form>
    );
}

export default Register;