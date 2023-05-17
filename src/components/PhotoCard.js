import classes from './PhotoCard.module.css';

export default function PhotoCard(props) {
    return (
        <div className={classes.card}>
            <img className={classes.image} src={props.imageUrl} />
            <p className={classes.name} >{props.name}</p>
        </div>
    )
}