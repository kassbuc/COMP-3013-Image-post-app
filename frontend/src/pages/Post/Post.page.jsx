
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage";
import { SimpleGrid, Container, Loader } from "@mantine/core";
import { useLoaderData } from "react-router-dom";

export const PostPage = () => {
  const posts = useLoaderData();
  return (
    <Container>
      <SimpleGrid cols={3}>
          {posts?.map((post) => (
            <ArticleCardImage key={post.title} {...post} />
          ))}
      </SimpleGrid>
    </Container>
  );
};

export const postsLoader = async () => {
  const res = await axios.get(`${DOMAIN}/api/posts`);
  console.log("I ran!");
  return (res.data);
};


// ATTEMPT AT SPINNER AND SLEEP
// UNCOMMENT TO SEE THE ATTEMPT
// comment out the whole part before this and also make sure to uncomment the sleep function in app.ts

{/*
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage";
import { Suspense } from 'react';
import { SimpleGrid, Container, Loader } from "@mantine/core";
import { useLoaderData, defer, Await } from "react-router-dom";

export const PostPage = () => {
  // ATTEMPT: This next line was used for attempting the Await and defer functionality using Suspense and Await
  const {posts} = useLoaderData();
 
    // ATTEMPT at using Suspense and Await to load a spinner fro Mantine called <Loader /> 
    // The fallback should load the Loader while the posts data is waiting to be returned. 
    // Then, Await should update posts when the data is returned and load the rest of the page
    // I found a thread that said you need to add (posts) => ( {... data } ) so that posts will actually get rendered in the page but I still had no luck.  
    return(
    <>
    <Suspense fallback={ <Loader/> } >
    <Await
    resolve={posts} > 
      <Container>
        <SimpleGrid cols={3}>
          { (posts) => (
            <>
            {posts?.map((post) => (
              <ArticleCardImage key={post.title} {...post} />
            ))}
            </>
          )}
        </SimpleGrid>
      </Container>
      </Await>
    </Suspense>
    </>
  );
};

// ATTEMPT: This is my loader that uses defer when fetching data. Uncomment the following:

export const postsLoader = () => {
  const res = axios.get(`${DOMAIN}/api/posts`);
  const res1 = res.data;
  return defer ({res1});
};
*/}
