import PhotoCard from "./PhotoCard"
import classes from "./SearchBox.module.css"

export default function SearchBox(props) {

    const searchButtonClickHandler = () => {
        console.log('clicked')
        props.onSearch();
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <input type="text" name="player" placeholder={`${props.title}명을 입력해주세요`} />
                <button className={classes.search} onClick={searchButtonClickHandler} >검색</button>
            </div>
            <div>
                {
                    props.data && props.data.map((item) =>
                        <PhotoCard imageUrl={item.imageUrl} name={item.name} />
                    )
                }
            </div>
        </div>
    )
}