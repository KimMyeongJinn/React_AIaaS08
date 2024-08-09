
//  &&은 앞의 요소가 참일 때만 뒤의 요소가 리턴된다.
// &&의 앞의 요소가 거짓이면 뒤의 요소는 아예 접근하지 않는다.

function Child(){
    const name = "리액트";
    //const name = "리웩~트";

    return (
        <>
            {name==='리액트' && <h1>리액트입니다.</h1>}
        </>
    )
}

export default Child;