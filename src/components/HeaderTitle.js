import classes from './HeaderTitle.module.css';

export default function HeaderTitle(props) {
    return (
        <div className={classes.header}>
            <header className={classes.title}>유니폼 합성하기</header>
        </div>
    )
}