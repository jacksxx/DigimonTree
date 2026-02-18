import AllDigimons from "@/components/pages/AllDigimons/AllDigimons";
import AllDigimonsSkeleton from "@/components/pages/AllDigimons/AllDigimonsSkeleton";
import { getQueryClient } from "@/libs/queryClient";
import { getDigimons } from "@/services/digimons/queries";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function AllDigimonsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["allDigimons"],
    queryFn: () =>
      getDigimons({
        page: 1,
        pageSize: 5000,
      }),
    
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AllDigimonsSkeleton />}>
        <AllDigimons />
      </Suspense>
    </HydrationBoundary>
  );
}
