import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/christian-counseling")({
  beforeLoad: () => {
    throw redirect({ to: "/christian-counseling-austin", statusCode: 301 });
  },
  component: () => null,
});
