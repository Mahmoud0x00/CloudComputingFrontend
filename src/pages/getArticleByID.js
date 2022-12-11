import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'flowbite-react';
//import { Card } from 'flowbite-react';

const GetArticleByID = () => {
    const [article, setArticle] = useState(null);
    //const [isLoading, setIsLoading] = useState(true);

    const parms = useParams();
    const articleID = parms.id;

    useEffect(() => {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;

        const fetchArticles = async () => {
            try {
                const response = await fetch(`http://localhost:9000/api/article/getArticle/${articleID}`,
                    {
                        signal: fetchSignal
                    }
                );
                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setArticle(responseData.article);
                //setIsLoading(false);
            } catch (err) {
                console.log(err);

            }
        };
        fetchArticles();

        return () => {
            fetchAbortController.abort();
        };
    }, [articleID]);

    // if (isLoading) {
    //     return <h1>Please wait while loading Articles...</h1>;
    //     }
    if (!article) {
        return <h1>Article not found</h1>;
    }

    return (
        <div className='flex gap-4'>

            <div>
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h1>
                <p class="font-normal text-gray-700 dark:text-gray-400">{article.content}</p>
                <div className="flex flex-wrap gap-2">
                    <div>
                        <Button href={'/addComment/' + article._id}>
                            Add Comment On article
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );

};


export default GetArticleByID;