import "./Child.css";

// jsx에서 css의 class를 지정할 때 className을 사용한다.

function Child(){
    const name = "리액트";

    return <div className="react">{name}</div>
}

export default Child;