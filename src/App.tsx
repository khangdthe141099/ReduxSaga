import { useUser } from "./features/hook";
import { fetchUserStart, fetchUserSuccess } from "./features/user/userSlice";
import { useAppDispatch } from "./hooks/useStore";
import { api } from "./lib/request";
import { getUserDetail } from "./services/user";

function App() {
  const user = useUser();

  const dispatch = useAppDispatch();

  const handleFetchUser = () => {
    dispatch(
      fetchUserStart({
        name: "Hoang Anh",
        company: "FPT Software",
      })
    );
  };

  const handleFetchUserAPI = async () => {
    console.log('hehe', await getUserDetail());
    
  };

  return (
    <>
      <h1>Learn Saga</h1>
      <button onClick={handleFetchUser}>Fetch user</button>
      <button onClick={handleFetchUserAPI}>Fetch user api</button>
    </>
  );
}

export default App;
