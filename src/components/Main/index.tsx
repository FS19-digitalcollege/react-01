import Blog from "../Blog";

const Main = () => {

    return(
        <>
            <h1>Main</h1>
            <Blog
                titulo="Titulo 1"
                fechar
            />
            <Blog
                titulo="Titulo 2"
            />
        </>
    );
}

export default Main;
