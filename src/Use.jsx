import React, { createElement, useEffect, useState } from 'react'

function Use() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPost(res.data));
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr><th>Sn.No</th><th>Title</th></tr>
                </thead>
                <tbody className='tb'>
                    {
                        post.map(u => (<tr key={u.id} className="tname"><td>{u.id}</td><td>{u.title}</td></tr>))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Use