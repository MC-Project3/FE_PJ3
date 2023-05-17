import PhotoCard from "./PhotoCard"
import classes from "./SearchBox.module.css"

export default function SearchBox(props) {

    const searchButtonClickHandler = () => {
        console.log('clicked')
        props.onSearch();
    }

    console.log(props);

    return (
        <div className={classes.container}>
            <h2>{props.title}</h2>
            <div className={classes.searchContainer}>
                <input className={classes.searchInput} type="text" name="player" placeholder={`${props.title}명을 입력해주세요`} />
                <button className={classes.searchButton} onClick={searchButtonClickHandler} >검색</button>
            </div>
            <div className={classes.cardList}>
                {
                    props.data && props.data.map((item) =>
                        <PhotoCard key={item.id} imageUrl={item.imageUrl} name={item.name} />
                    )
                }
            </div>
        </div>
    )
}