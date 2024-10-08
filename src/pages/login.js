import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {session ? (
        <div>
          <p>Signed in as {session.user.name}</p>
          <button onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <button onClick={() => signIn("github", { callbackUrl: "/" })}>
            Sign in with GitHub
          </button>
        </div>
      )}
    </div>
  );
}
