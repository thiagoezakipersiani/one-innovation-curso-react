import React, { useEffect,memo, useState } from "react";

const areEqual = (prevProps,nextProps) =>{
    return prevProps.loading === nextProps.loading;
}

function Twitter(props) {
    const {loading} = props;
    const [tweet,setTweet] = useState('title')

    //componentDidMounted
    useEffect(() => {
        const {posts, loading} = props;
        console.log('componemtDidMounted: ' ,posts)
        console.log('componemtDidMounted: loading ' ,loading)
    }, [])

    //componentDidUpdate
    useEffect(() =>{
        console.log('ComponentDidUpdate' , loading)
    },[loading])

    //componentWillUnmount
    useEffect(()=>{
        return ()=>{
            console.log('ComponentWillUnmount removido!')
        }
    },[])


    const handleTweet= () =>{
        setTweet('Tweet atualizado')
    }

    console.log('Tweet atualizado:' , tweet)
    return (
        <div>
           <button onClick={handleTweet}>Re-render</button>
            tests
        </div>
    )
}

export default memo(Twitter, areEqual);