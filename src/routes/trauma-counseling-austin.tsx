import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/trauma-counseling-austin")({
  beforeLoad: () => {
    throw redirect({ to: "/trauma-therapy-austin", statusCode: 301 });
  },
  component: () => null,
});
