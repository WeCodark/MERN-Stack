import React,{useState, useEffect} from "react";

function DataFetcher(){
    const [data,setData] = useState([]) // We can post multiple values
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
                const result = await res.json();
                setData(result)
            } catch (err){
                setError(err)
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if (loading) return <p>Loading....</p>
    if (error) return <p>Error: {error.message}</p>

    return(
        <div>
            {data.map((post)=>(
                <div key={post.id} style={styles.container}>
                    <h3 style={styles.heading}>{post.title}</h3>
                    <p>{post.body}</p>
                </div>  
            ))}
        </div>
    )
}


const styles = {
    container : {
        backgroundColor: 'lightgray',
        padding: '20px',
        margin: '30px auto',
        width: '60%',
        borderRadius: '15px',
        fontFamily: 'sans-serif',
        boxShadow: '0 4px 10px'
    },
    heading: {
        color: 'brown',
        marginBottom: '15px'
    }
    
}

export default DataFetcher