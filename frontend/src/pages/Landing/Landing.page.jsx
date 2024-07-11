//import { Container } from "@mantine/core";
//import cx from 'clsx';
import { Title, Text, Container, Overlay } from '@mantine/core';
import classes from './Landingpage.module.css';

const Landing = () => {

  return (
    <>
    <div className={classes.wrapper}>
    <Overlay color="#000" opacity={0.65} zIndex={1} />

    <div className={classes.inner}>
      <Title className={classes.title}>
        Drop, Save, Cherish: Your Photos, Our Care
      </Title>

      <Container size={640}>
        <Text size="lg" c="white" className={classes.description}>
          Never lose a photo again with PHOTO DROP - unlimited storage, instant access. 
        </Text>
      </Container>
    </div>  
  </div>
  </>

  );
};

export default Landing;
