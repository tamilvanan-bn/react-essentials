export const Greetings = ({ name = "Guest", message = "Hello" }) => {
  return (
    <>
      <h1>
        {message}, {name}
      </h1>
    </>
  );
};
