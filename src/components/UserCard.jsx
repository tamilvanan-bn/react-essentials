import { UserInfo } from "./UserInfo";

export const UserCard = ({ id, ...props }) => {
  return (
    <div>
      <h2>User {id} details</h2>
      {/* <UserInfo name={name} age={age} city={city} email={email} />*/}
      {/* The above one works, but it can be improved by*/}
      <UserInfo {...props} />
    </div>
  );
};
