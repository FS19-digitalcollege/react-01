import BlogFechar from "./BlogFechar";
import BlogTitulo from "./BlogTitulo";

type BlogProps = {
    titulo: string,
    conteudo?: string,
    imagem?: string,
    fechar?: boolean
}

const Blog = ({titulo, conteudo, imagem, fechar} : BlogProps) => {
    return(
        <>
            <BlogTitulo titulo={titulo} />
            {
                fechar && (
                    <BlogFechar />
                )
            }
        </>
    );
}

export default Blog;
