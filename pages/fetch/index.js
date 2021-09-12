import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
    return (
        <Layout>
            <h3>Fetch Sample</h3>
            <ul className="items">
                {props.shows.map(({show}) => (
                    <li className="item" key={show.id}>
                        
                        <Link as={`/f/${show.id}`} href={`/fetch/detail?id=${show.id}`}>
                            <a className="item-link"><img src={show.image.medium} /></a>
                        </Link>
                        <Link as={`/f/${show.id}`} href={`/fetch/detail?id=${show.id}`}>
                            <a className="item-link">{show.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                .items {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }
                .items .item {
                    width: 30%;
                    margin: 0 0 50px 0;
                }
                .items .item img {
                    width: 100%;
                }
                .items .item .item-link {
                    display: block;
                    font-size: 14px;
                    margin: 15px 0 0 0;
                }
                @media screen and (max-width: 768px) {
                    .items {
                        display: block;
                    }
                    .items .item {
                        width: 100%;
                        margin: 0 0 25px 0;
                    }
                    .items .item .item-link {
                        margin: 5px 0 0 0;
                    }
                }
            `}</style>
        </Layout>
    );
}
Index.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    return {
        shows: data,
    }
}

export default Index;