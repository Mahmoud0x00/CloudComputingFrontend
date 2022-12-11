import React, { useEffect } from "react";


const AddArticleComment = () => {

    const [comment, setComment] = React.useState("");
    //const [article, setArticle] = React.useState(null);

    useEffect(() => {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;

        const fetchArticles = async () => {
            try {
                const response = await fetch(`http://localhost:9000/api/article/addComment/{id}`,
                    {
                        signal: fetchSignal,
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",

                        },
                        body: JSON.stringify({
                            comment: comment,
                        }),
                    }
                );
                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setComment(responseData.comment);
                //setIsLoading(false);
            } catch (err) {
                console.log(err);

            }


        };
        fetchArticles();

        return () => {
            fetchAbortController.abort();
        }
    }, [comment]);
    };

export default AddArticleComment;