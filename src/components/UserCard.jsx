const UserCard = ({ user }) => {
  return (
    <div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>{`Hello, I'm ${user.firstName} ${user.lastName} with ${user.age} years old and I'm from ${user.country} `}</p>
    </div>
  );
};

export default UserCard;
