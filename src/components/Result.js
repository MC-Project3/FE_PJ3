import classes from './Result.module.css'

export default function Result(props) {
    //합성된 이미지가 없으면 <h2>태그가 활성화 <img> 태그가 비활성화
    return (
        <article className={classes.container}>
            {
                props.image ?
                    <img className={classes.image} src={props.image} /> :
                    <h2 >합성된 이미지가 표시됩니다</h2>
            }
        </article>
    )
}
