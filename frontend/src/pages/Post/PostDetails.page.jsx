import { Link, useLoaderData, defer, Await } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container, Image, Paper, Text, Grid } from "@mantine/core";
import classes from "./PostDetails.module.css"
import { Loader } from '@mantine/core';

function PostDetailsPage() {
  const {post, username, user} = useLoaderData();
  console.log(post, username, user);
  return (
    <>
      <Container>
        <Grid>
          <Grid.Col span={6}>
              <Paper shadow="md" p="md">
                <Text fw={700}>Author</Text>
                <Text size="sm">{username}</Text>
              </Paper>
              <Paper shadow="md" p="md">
                <Text fw={700}>Title</Text>
                <Text size="sm">{post.title}</Text>
              </Paper>
              <Paper shadow="md" p="md">
                <Text fw={700}>Category</Text>
                <Text size="sm">{post.category}</Text>
              </Paper>
              <Paper shadow="md" p="md">
                <Text fw={700}>Content</Text>
                <Text size="sm">{post.content}</Text>
              </Paper>
              {username == user ? (
                <Paper>
                  <Button variant="filled" color="yellow">
                    <Link to="./edit" relative="path" >Edit</Link>
                  </Button>
                </Paper>
              ): ""
              }
          </Grid.Col>
          <Grid.Col span={6}>
              <Image
              radius="md"
              h="100%"
              w="100%"
              src={post.image}
              />
          </Grid.Col>
        </Grid>
      </Container>
      <div className={classes.button}>
        <Button justify="center" variant="filled" color="yellow">
            <Link to="/posts">Back to Posts</Link>
        </Button>
      </div>
    </>
  );
}

export const postDetailsLoader = async ( {params} ) => {
    const id = params.id;
    //console.log(id);
    const res = await axios.get(`${DOMAIN}/api/posts/` + id);
  return res.data;
}
export default PostDetailsPage
