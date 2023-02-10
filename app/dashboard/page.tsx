// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import { Suspense } from "react";
//import { PostFeed, Weather } from "./Components";

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>{"<PostFeed/>"}</Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>{"<Weather />"}</Suspense>
    </section>
  );
}
