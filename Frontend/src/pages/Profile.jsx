import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log({ isLoading, isAuthenticated, user });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <main className="p-4 h-full w-full flex flex-col gap-4 items-center justify-center">
        <img
          className="h-64 w-64 bg-cover bg-center bg-no-repeat rounded-full"
          src={user.picture}
          alt={user.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/noProfilePhoto.png";
            // e.target.style.display = "none";
          }}
        />

        <h2 className="text-4xl">{user.name}</h2>

        <p>{user.email}</p>
      </main>
    )
  );
};
