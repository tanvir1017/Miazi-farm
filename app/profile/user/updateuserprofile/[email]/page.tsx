const UserProfile = ({ params }: { params: { email: string } }) => {
  const { email } = params;
  return <section className="container">{email}</section>;
};

export default UserProfile;
