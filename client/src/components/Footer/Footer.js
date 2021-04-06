import style from './Footer.module.css'

const Footer = () => {

    return (
        <footer className={style.footer}>
            <p className={style.footerContent}>Този сайт e предназначен за финалния изпит на курса на SoftUni <a className={style.footerContentNavigation}
                href="https://softuni.bg/trainings/3315/reactjs-march-2021/internal">"ReactJS - март 2021"</a></p>
            <p className={style.footerContent}>© Всички права запазени, 2021</p>
        </footer>
    )
};

export default Footer;