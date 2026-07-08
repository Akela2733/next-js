import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NoItems } from "../components/NoItems";
import { redirect } from "next/navigation";

export default async function ReservationsRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user?.id) return redirect("/");

  return (
    <section className="container mx-auto px-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">
        Your Reservations
      </h2>

      <NoItems
        title="Reservations coming soon"
        description="This feature requires a database backend. For now, browse from the home page."
      />
    </section>
  );
}
