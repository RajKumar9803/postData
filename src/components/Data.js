import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Abc from './Abc';



const baseURL = "https://jsonplaceholder.typicode.com/posts";


function Data() {
    const [post, setPost] = useState([]);
    const [showperPage, setShowPerPage] = useState(6)
    const [Pagination, setPagination] = useState({
        start: 0,
        end: showperPage
    });

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };
    return (

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {post.slice(Pagination.start, Pagination.end).map((cv) => (
                <Grid item xs={2} sm={4} md={4} key={cv.title}

                >
                    <Card sx={{ minWidth: 275, minHeight: 250 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {cv.id}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {cv.title}
                            </Typography>

                            <Typography variant="body2">
                                {cv.body}
                            </Typography>
                        </CardContent>
                        <CardActions>

                        </CardActions>
                    </Card>
                </Grid>

            ))}
            <Grid item spacing={3} sx={
                {
                    position: "absolute",
                    left: 350,
                    top: 530,

                }
            }>
                <Abc showperPage={showperPage} onPaginationChange={onPaginationChange} total={post.length} />

            </Grid>




        </Grid>





    )
}

export default Data;