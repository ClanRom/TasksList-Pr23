export default function Button({textBtn, funcBtn, classNameBtn}){
    return(
        <button
        onClick={funcBtn}
        className={classNameBtn}
        >
        {textBtn}
        </button>
    )
}