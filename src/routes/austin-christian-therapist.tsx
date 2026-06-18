import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/austin-christian-therapist")({
  beforeLoad: () => {
    throw redirect({ to: "/christian-counseling-austin", statusCode: 301 });
  },
  component: () => null,
});
