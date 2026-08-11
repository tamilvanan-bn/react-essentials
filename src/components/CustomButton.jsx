export const CustomButton = ({ text }) => {
  const name = 'Deb';
  //   const handleClick = (e) => {
  //     console.log('element', e.target);
  //     console.log('coordinates', e.clientX, e.clientY);
  //     console.log('which mouse button', e.button);
  //     alert('Thanks for liking!');
  //   };
  const handleClick = () => {
    console.log(`Hey ${name}, you clicked ${text}`);
  };
  return <button onClick={handleClick}>{text}</button>;
};
