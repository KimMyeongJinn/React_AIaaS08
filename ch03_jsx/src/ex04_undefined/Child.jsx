

function Child(){
    const name = undefined;
    // const name = "리액트";

    return (
        <>
            {name || <h1>값이 undefined입니다</h1>}
        </>
    )
}

export default Child;