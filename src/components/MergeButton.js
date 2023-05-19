import classes from './MergeButton.module.css';

function MergeButton(props) {

    console.log("button");
    return <button className={classes.button} onClick={props.onClick} disabled={props.disabled}>합성</button>
}

export default MergeButton;