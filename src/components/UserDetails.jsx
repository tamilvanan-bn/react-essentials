export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNewUser,
  role,
}) => {
  if (hideOffline && !isOnline) {
    return null;
  }
  let roleBadge = null;
  switch (role) {
    case "admin":
      roleBadge = <span>Admin</span>;
      break;
    case "mod":
      roleBadge = <span>Moderator</span>;
      break;
    case "vip":
      roleBadge = <span>VIP</span>;
      break;
    default:
      roleBadge = <span>User</span>;
      break;
  }
  return (
    <div>
      <h3>
        {name} {isPremium && <span>⭐</span>}
        {isNewUser && <span>🆕</span>}
        {roleBadge}
      </h3>
      <p>{isOnline ? "🟢Online" : "Offline🟡"}</p>
      {isOnline ? (
        <button>Send message</button>
      ) : (
        <small>Please check back later</small>
      )}
    </div>
  );
};
