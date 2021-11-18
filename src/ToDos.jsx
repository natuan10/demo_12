import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import ToDoCard from './ToDoCard';

export default function ToDos() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                const persons = res.data;
                setList(persons);
            })
            .catch(error => console.log(error));
    }, [])
    // console.log(list, 'list')
    return (
        <>
            {
                list ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                        {list.slice(0, 10).map(item => {
                            return (<ToDoCard todo={item} key={item.id} />)
                        })}
                    </div>
                ) : <CircularProgress />
            }
        </>
    )
}
