import { Container } from "./HomeStyles";
import Box from "../components/Box";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "Box Title 1",
    text: lorem,
  },
  {
    id: Math.random(),
    title: "Box Title 2",
    text: lorem,
  },
  {
    id: Math.random(),
    title: "Box Title 3",
    text: lorem,
  },
  {
    id: Math.random(),
    title: "Box Title 4",
    text: lorem,
  },
];

const Home = () => {
  return (
    <Container>
      {data.map((box) => (
        <Box key={box.id} title={box.title} text={box.text} />
      ))}
    </Container>
  );
};

export default Home;
