import AppLayout from "../components/AppLayout";

const Profile = () => {
  const FollowerList = [
    { nickname: "하이 " },
    { nickname: "하이2 " },
    { nickname: "하이3 " },
  ];
  const FollowList = [
    { nickname: "하이 " },
    { nickname: "하이2 " },
    { nickname: "하이3 " },
  ];

  return (
    <div>
      <Head>
        <title>내프로필 |</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={FollowList} />
        <FollowList header="팔로워 목록" data={FollowerList} />
      </AppLayout>
    </div>
  );
};
export default Profile;
