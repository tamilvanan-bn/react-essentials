import { ActionButton } from './ActionButton';

export const Newsletter = () => {
  const handleSubscribe = () => {
    console.log('Subscribed!');
  };
  return (
    <div>
      <h2>Subscribe to our newsletter</h2>
      <ActionButton text='Subscribe' onClick={handleSubscribe} />
    </div>
  );
};
