import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

// Blog Sample
const PostLink = ({ id, title, content, tag, image, createdAt }) => {
    return (
        <>
            <div className="blog">
                <img src={ image } />
                <div className="blog-text">
                    <span className="createdAt">{ createdAt }</span>
                    <span className="tag">{ tag }</span>
                    <p className="title">{ title.substr(0,20) }</p>
                    <p className="content-text">{ content.substr(0,40) }.........</p>
                    <li>
                        <Link as={`/b/${id}`} href={`/blog/detail?title=${title}&content=${content}&tag=${tag}&image=${image}&createdAt=${createdAt}`}>
                            <a className="next-link">{title}</a>
                        </Link>
                    </li>
                </div>
            </div>

            <style jsx>{`
                .blog {
                    display: flex;
                    margin: 0 0 50px 0;
                    padding: 0 0 50px 0;
                    border-bottom: 1px dashed #ccc;
                }
                .blog:last-child {
                    margin: 0;
                    padding: 0;
                    border-bottom: none;
                }
                .blog .createdAt {
                    font-size: 14px;
                    color: #696969;
                    margin: 0 10px 0 0;
                }
                .blog .tag {
                    font-size: 12px;
                    color: #fff;
                    padding: 3px 10px 1px;
                    background: #ff69b4;
                    bottom: 1px;
                    position: relative;
                }
                .blog img {
                    display: block;
                    width: 150px;
                    height: 125px;
                    object-fit: cover;
                    margin: 0 30px 0 0;
                    background: #eee;
                }
                .title {
                    font-size: 20px;
                    font-weight: 500;
                    margin: 10px 0;
                }
                .content-text {
                    text-align: justify;
                    font-size: 15px;
                    line-height: 1.75em;
                }
                .next-link {
                    display: block;
                    font-size: 13px;
                    margin: 10px 0 0 0;
                }
                @media screen and (max-width: 768px) {
                    .blog {
                        display: block;
                        margin: 0 0 25px 0;
                        padding: 0 0 25px 0;
                    }
                    .blog img {
                        width: 100%;
                        height: 200px;
                        margin: 0 0 20px 0;
                    }
                }
            `}</style>
        </>
    );
}
const Index = () => {
    return (
        <Layout> 
            <h3>Blog Sample</h3>
            <ul>
                <PostLink
                    id="3"
                    title="初めての【Next】アプリです 3"
                    content="NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦"
                    tag="初心者向け"
                    image="...path..."
                    createdAt="20.06.11"
                />
                <PostLink
                    id="2"
                    title="初めての【Next】アプリです 2"
                    content="NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦"
                    tag="初心者向け"
                    image="...path..."
                    createdAt="20.06.11"
                />
                <PostLink
                    id="1"
                    title="初めての【Next】アプリです 1"
                    content="NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦NextでBlogチュートリアルに挑戦"
                    tag="初心者向け"
                    image="...path..."
                    createdAt="20.06.11"
                />
            </ul>
        </Layout>
    );
}

export default Index;