import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  const userId = session?.user.id;
  console.log(userId);

  if (session) {
    return (
      <>
        Hello, {session.user.name}! <br />
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  } else {
    return (
      <>
        Not signed in <br />
        <button type="button" onClick={() => signIn()}>
          Sign in
        </button>
      </>
    );
  }
}
