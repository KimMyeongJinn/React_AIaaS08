
//  jsx 표현식에서는 if문을 사용할 수 없으므로, 조건부 연산을 사용한다

function Child(){
    //const name = "리액트";
    const name = "리웩~트";

    return (
        <>
            {name==="리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
        </>
    )
}

export default Child;