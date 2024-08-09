import "./Child.css";

// jsx에서 css의 class를 지정할 때 className을 사용한다.

/*
여러 줄 
주석
*/

function Child(){
    const name = "리액트";

    //  jsx의 주석은 아래처럼 됩니다.
    return (
        <>
            {/* 주석은 이렇게 작성합니다. */}
            <div className="react">{name}</div>

            // 이런 주석은 보입니다.
            /*
            이 주석도 보입니다.
            */
        </>
    );
}

export default Child;