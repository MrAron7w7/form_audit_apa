import { signOut } from "@/lib/auth";

export default function SignOut() {
  const signOutAll = async () => {
    "use server";

    console.log("Signing out...");
    await signOut();
  };
  return (
    <form action={signOutAll}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
