import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import fetch from 'isomorphic-unfetch';

// Fetch Sample
const Fetch = (props) => (
    <Layout>
        <h3>{props.show.name}</h3>

        <Link href="/fetch">
            <a className="prev-link">← Back</a>
        </Link>
        
        <div className="item">
            <img src={props.show.image.medium} />
            <p className="item-text">{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        </div>

        <style jsx>{`
            .item img {
                display: block;
                width: 300px;
                height: 100%;
                object-fit: cover;
                margin: 0 auto 25px;
            }
            .item-text {
                font-size: 14px;
                line-height: 1.75em;
            }
            .prev-link {
                display: block;
                font-size: 15px;
                margin: 0 0 30px 0;
            }
            @media screen and (max-width: 768px) {
                .item img {
                    width: 100%;
                }
            }
        `}</style>
    </Layout>
)

Fetch.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show }
}

export default Fetch;