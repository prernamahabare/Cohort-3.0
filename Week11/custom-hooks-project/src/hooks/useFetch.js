import { useEffect, useState } from "react";

export function useFetch12() {
    const [data, setData] = useState({});

    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return {
        data
    }
}

export function useFetchDynamic(url) {

    const [post, setPost] = useState({});

    async function fetchPost() {
        const response = await fetch(url);
        const json = await response.json();
        setPost(json);
    }

    useEffect(() => {
        fetchPost();
    }, [url])

    return {
        post
    }

}

export function useRefecth(url, second) {

    const [refechPost, setRefechPost] = useState({});
    const [timer, setTimer] = useState(0);

    async function fetchPost() {
        const response = await fetch(url);
        const json = await response.json();
        setRefechPost(json);
    }

    useEffect(() => {
        let intervalId = setInterval(() => {
            fetchPost(),
                setTimer(0)
        }, second);

        let timeInterval = setInterval(() => {
            setTimer(prevTime => prevTime + 1 );
        }, 1000)

        return () => {
            clearInterval(timeInterval);
            clearInterval(intervalId)
        }

    }, [url, second])

    return {
        refechPost,
        timer
    }

}

