import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NoItems } from "../components/NoItems";

export default async function FavoriteRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/");

  return (
    <section className="container mx-auto px-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Your Favorites</h2>

      <NoItems
        title="Favorites coming soon"
        description="This feature requires a database backend. For now, browse from the home page."
      />
    </section>
  );
}
