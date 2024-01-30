const UserInfo = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const today = new Date();
  return (
    <div>
      <p>Hello {handleNameChange()}!</p>
      <h1>Copyright &copy; {today.getFullYear()}</h1>
    </div>
  );
};

export default UserInfo;
