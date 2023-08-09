import { Provider, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <Provider store={store}>
      <AppLayout>
        <div>
          {isLoggedIn && <PostForm />}
          {mainPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </AppLayout>
    </Provider>
  );
};

document.getElementById("root");
export default Home;
