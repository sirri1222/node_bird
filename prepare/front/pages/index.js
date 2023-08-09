import { Provider } from "react-redux";
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <Provider store={store}>
      <AppLayout>
        <div>home</div>
      </AppLayout>
    </Provider>
  );
};

document.getElementById("root");
export default Home;
