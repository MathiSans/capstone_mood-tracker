import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginButton() {
  const { data: session } = useSession();
  const userId = session?.user.id;

  if (session) {
    return (
      <>
        Hello, {session.user.name}! <br />
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
        <br />
        <Image
          alt="user image"
          width="35"
          height={"35"}
          src={session.user.image}
        />
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
