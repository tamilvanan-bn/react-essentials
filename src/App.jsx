import { CardWrapper } from './components/CardWrapper';
import { UserCard } from './components/UserCard';
import { UserDetails } from './components/UserDetails';
import { ProductList } from './components/ProductList';
import { NameList } from './components/NameList';
import { Alert } from './components/Alert';
import { CustomButton } from './components/CustomButton';
import { ActionButton } from './components/ActionButton';
import { Contact } from './components/Contact';
import { Newsletter } from './components/NewsLetter';
import { Menu } from './components/Menu';
import { UserContext } from './components/UserContext';

function App() {
  const user = {
    name: 'John',
    age: 37,
  };

  return (
    <UserContext value={user}>
      <div>
        {/* <Welcome name="Walt" alias="Hiesenberg" />
      <Welcome name="Jesse" alias="Pinkman"/>
      <Welcome name="Jimmy" alias="Saul"/>
      <StyledForm />
      <CandidateProfile />
      <Greetings name="Dave" message="Welcome" />
      <Greetings name="Finch" />
      <Greetings message="Greetings" />
      <Greetings />*/}
        {/* <Product title="Gaming laptop" price={1299.99} inStock={true} categories={["Electronics", "Gaming", "Computers"]} />*/}
        {/* <CardWrapper title="User profile">
        <p>Arnold</p>
        <p>fitness.arnold@email.com</p>
      </CardWrapper>
      <UserCard id={1} name="Garry" age={27} city="Chennai" email="garry.kevin@email.com" />*/}
        {/* <UserDetails
        name="Aaron"
        isOnline={true}
        isPremium={true}
        isNewUser={false}
        role="admin"
      />
      <UserDetails
        name="Jamie"
        isOnline={false}
        hideOffline={false}
        isPremium={false}
        isNewUser={true}
        role="vip"
      />*/}
        {/* <ProductList /> */}
        {/* <NameList /> */}
        {/* <Alert>Your changes are saved!</Alert>
      <Alert type="error">Something went wrong!</Alert> */}
        {/* <CustomButton text='Like' />
      <CustomButton text='Share' /> */}
        {/* <ActionButton text='Like' /> */}
        {/* <Contact />
      <Newsletter /> */}
        <Menu />
      </div>
    </UserContext>
  );
}

export default App;
