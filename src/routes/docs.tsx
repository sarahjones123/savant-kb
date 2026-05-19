import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DocsTopbar } from "@/components/docs/DocsTopbar";
import { DocsSidebar } from "@/components/docs/DocsSidebar";

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
});

function DocsLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DocsTopbar />
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-6">
          <aside className="hidden lg:block">
            <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
              <DocsSidebar />
            </div>
          </aside>
          <main className="min-w-0 py-8 lg:py-10">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
