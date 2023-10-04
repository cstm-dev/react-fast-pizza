import { useSelector } from "react-redux";

function User() {
  const userName = useSelector((store) => store.user.userName);

  if (!userName) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default User;