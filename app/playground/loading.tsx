import { LoaderDots } from "~/components/loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <LoaderDots />
    </div>
  );
}
