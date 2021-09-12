import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';

// Blog Sample
const Content = withRouter((props) => {
    return (
        <>
            <h3>My Blog</h3>

            <Link href="/blog">
                <a className="prev-link">← Back</a>
            </Link>

            <div className="blog">
                <img src={ props.router.query.image } />
                <div className="blog-text">
                    <span className="createdAt">{ props.router.query.createdAt }</span>
                    <span className="tag">{ props.router.query.tag }</span>
                    <p className="title">{ props.router.query.title }</p>
                    <p className="content-text">{ props.router.query.content }</p>
                </div>
            </div>

            <style jsx>{`
                .blog {
                    display: flex;
                    flex-direction: row-reverse;
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
                    width: 200px;
                    height: 175px;
                    object-fit: cover;
                    margin: 0 0 0 50px;
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
                .prev-link {
                    display: block;
                    font-size: 15px;
                    margin: 0 0 30px 0;
                }
                @media screen and (max-width: 768px) {
                    .blog {
                        display: block;
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
});
const Blog = (props) => {
    return (
        <Layout>
            <Content />
        </Layout>
    );
}

export default Blog;