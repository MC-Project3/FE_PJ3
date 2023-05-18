import { useState } from "react"

import PhotoCard from "./PhotoCard"
import classes from "./SearchBox.module.css"


export default function SearchBox(props) {
    const [enteredName, setEnteredName] = useState('')

    const searchButtonClickHandler = () => {
        console.log('clicked')
        props.onSearch(enteredName);
    }

    console.log(props);

    return (
        <div className={classes.container}>
            <h2>{props.title}</h2>
            <div className={classes.searchContainer}>
                <input
                    className={classes.searchInput}
                    type="text"
                    name="player"
                    placeholder={`${props.title}명을 입력해주세요`}
                    value={enteredName}
                    onChange={e => setEnteredName(e.target.value)}
                />
                <button className={classes.searchButton} onClick={searchButtonClickHandler} >검색</button>
            </div>
            <div className={classes.cardListContainer}>
                <div className={classes.cardList}>
                    {
                        props.data && props.data.map((item) =>
                            <PhotoCard key={item.id} imageUrl={item.imageUrl} name={item.name} highlight={item.id === props.selectedItemId} onClick={() => props.onCardClick(item)} />
                        )
                    }
                </div>
                <button className={classes.moreButton}>더보기</button>
            </div>
        </div>
    )
}