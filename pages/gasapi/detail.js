import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';

const Content = withRouter((props) => {
    return (
        <>
            <h3>Gas API Detail</h3>

            <div className="gasapi">
                <img src={ props.router.query.urlToImage } />
                <div className="gasapi-text">
                    <div className="title">{ props.router.query.title }</div>
                    <p className="description-text">{ props.router.query.description }</p>
                    <div className="author">by { props.router.query.author }</div>
                </div>
            </div>

            <Link href="/gasapi">
                <a className="prev-link">← Back</a>
            </Link>

            <style jsx>{`
                .gasapi {
                    display: block;
                }
                .gasapi img {
                    display: block;
                    width: 75%;
                    object-fit: cover;
                    margin: 0 auto 25px;
                    background: #eee;
                }
                .gasapi .gasapi-text {
                    text-align: center;
                }
                .gasapi .gasapi-text .title {
                    font-size: 25px;
                    font-weight: 500;
                    margin: 10px 0;
                }
                .gasapi .gasapi-text .description-text {
                    font-size: 15px;
                    line-height: 1.75em;
                    margin: 0 0 25px 0;
                }
                .gasapi .gasapi-text .author {
                    font-size: 12px;
                    color: #696969;
                    margin: 5px 0 0 0;
                }
                .prev-link {
                    display: block;
                    font-size: 15px;
                    margin: 30px 0 0 0;
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

const Detail = () => {
    return (
        <Layout>
            <Content />
        </Layout>
    );
}

export default Detail;