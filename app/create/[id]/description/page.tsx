import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { Counter } from "@/app/components/Counter";
import { CreateDescription } from "@/app/actions";
import { CreationBottomBar } from "@/app/components/CreationBottomBar";

export default function DescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          please describe your home as good as you can
        </h2>
      </div>

      <form action={CreateDescription}>
        <input type="hidden" name="homeId" value={params.id} />
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input
              name="title"
              type="text"
              required
              placeholder="short and simple..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              required
              placeholder="Plaese describe your Home.."
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input
              name="price"
              type="number"
              required
              placeholder="Price per Night in USD"
              min={10}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input name="image" type="file" required placeholder="required" />
          </div>

          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between"></div>
              <div className="flex flex-col">
                <h3 className="underline font-medium ">Guests</h3>
                <p className="text-muted -foreground text-sm">
                  How many Guests do you want
                </p>
              </div>

              <Counter name="guest" />

              <div className="flex items-center justify-between"></div>
              <div className="flex flex-col">
                <h3 className="underline font-medium ">Rooms </h3>
                <p className="text-muted -foreground text-sm">
                  How many Rooms do you have?
                </p>
              </div>

              <Counter name="room" />

              <div className="flex items-center justify-between"></div>
              <div className="flex flex-col">
                <h3 className="underline font-medium ">Bathrooms</h3>
                <p className="text-muted -foreground text-sm">
                  How many Bathrooms do you have?
                </p>
              </div>

              <Counter name="bathroom" />
            </CardHeader>
          </Card>
        </div>
        <CreationBottomBar />
      </form>
    </>
  );
}
