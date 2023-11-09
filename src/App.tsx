import { useUser } from "./features/hook";
import { fetchUserStart, createUserStart } from "./features/user/userSlice";
import { useAppDispatch } from "./hooks/useStore";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isFetching } = useUser();

  const dispatch = useAppDispatch();

  const handleFetchUserAPI = () => { 
    dispatch(fetchUserStart());
  };

  const handleCreateUser = () => {
    dispatch(
      createUserStart({
        name: "Nguyen Thai Huy",
        age: 23,
        address: "Ha Noi",
        id: "100",
      })
    );
  };

  return (
    <>
      <h1>Redux saga</h1>
      <button onClick={handleFetchUserAPI}>
        {isFetching ? "Loading..." : "Fetch user api"}
      </button>
      <button onClick={handleCreateUser}>Create User</button>
      <h3>User list</h3>
      <div>
        {data &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          data?.map((item: any, index: number) => (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            <div key={index}>{item.name}</div>
          ))}
      </div>
    </>
  );
}

export default App;
