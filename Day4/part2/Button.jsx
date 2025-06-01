export default function Button() {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    const handleClickWithParams = (param) => {
        console.log(`Aditya Please stop touching me ${param}`);
    }

    return(
        <button onClick={() =>handleClickWithParams("Aditya")}>Click Me😁</button>
    )
}
