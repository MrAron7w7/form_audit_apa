import HeaderBreadcrumb from "@/components/admin/header-breadcrumb";

export default async function Page() {
  return (
    <div>
      <HeaderBreadcrumb title="Dashboard" href="/admin" />
      <h1>Page dashboard</h1>
    </div>
  );
}
