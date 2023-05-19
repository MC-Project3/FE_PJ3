

export default function Result(props) {
    //합성된 이미지가 없으면 <h2>태그가 활성화 <img> 태그가 비활성화
    return (
        <article style={{ backgroundColor: 'rgb(0,0,100)' }}>
            {
                props.image ?
                    <img src={props.image} /> :
                    <h2>합성된 이미지가 표시됩니다</h2>
            }
        </article>
    )
}
