import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';

const URL = 'https://script.google.com/macros/s/AKfycbwpzxOLHy5rUxRD9eoRAYJNMNy41WVZe6a3AfZJNAxsPx8iz3g/exec';

const Index = () => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const res = await axios.get(URL);
            setArticles(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Layout>
            <h3>Gas API</h3>

            {articles.map((item) => (
            <div className="gasapi" key={item.id}>
                <img src={ item.urlToImage } />
                <div className="gasapi-text">
                    <span className="publishedAt">{ item.publishedAt }</span>
                    <span className="author">{ item.author }</span>
                    <p className="title">{ item.title.substr(0,12) }...</p>
                    <p className="gasapi-text">{ item.description.substr(0,20) }...</p>
                    <Link
                        as={`/animation/${item.id}`}
                        href={
                            `/gasapi/detail?
                            id=${item.id}
                            &author=${item.author}
                            &title=${item.title}
                            &description=${item.description}
                            &url=${item.url}
                            &urlToImage=${item.urlToImage}
                            &publishedAt=${item.publishedAt}`
                        }
                    >
                        <a className="next-link">{ item.title }</a>
                    </Link>
                </div>
            </div>
            ))}

            <style jsx>{`
                .gasapi {
                    display: flex;
                    margin: 0 0 50px 0;
                    padding: 0 0 50px 0;
                    border-bottom: 1px dashed #ccc;
                }
                .gasapi:last-child {
                    margin: 0;
                    padding: 0;
                    border-bottom: none;
                }
                .gasapi img {
                    display: block;
                    width: 150px;
                    height: 125px;
                    object-fit: cover;
                    margin: 0 30px 0 0;
                    background: #eee;
                }
                .gasapi .gasapi-text {
                    text-align: justify;
                    font-size: 15px;
                    line-height: 1.75em;
                }
                .gasapi .gasapi-text .publishedAt {
                    font-size: 14px;
                    color: #696969;
                    margin: 0 10px 0 0;
                }
                .gasapi .gasapi-text .author {
                    font-size: 12px;
                    color: #fff;
                    padding: 3px 10px;
                    background: #ff69b4;
                    bottom: 1px;
                    position: relative;
                }
                .gasapi .gasapi-text .title {
                    font-size: 20px;
                    font-weight: 500;
                    margin: 10px 0;
                }
                .next-link {
                    display: block;
                    font-size: 13px;
                    margin: 10px 0 0 0;
                }
                @media screen and (max-width: 768px) {
                    .gasapi {
                        display: block;
                        margin: 0 0 25px 0;
                        padding: 0 0 25px 0;
                    }
                    .gasapi img {
                        width: 100%;
                        height: 200px;
                        margin: 0 0 20px 0;
                    }
                }
            `}</style>
        </Layout>
    );
}
export default Index;