export function CompText(props){
    return(
    <p>{props.text}</p>
    )
}
export default function Comp1(){
    console.log('hello from click')
    let text = 'hello from component 1';

    function handleClick(){
        text = "hello world"
    }
    return(
        <>
        <button onClick={handleClick}>Change text</button>
        <CompText text={text}></CompText>
        </>


    )
}   