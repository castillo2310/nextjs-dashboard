import Breadcrumb from "@/components/dashboard/breadcrumb";

export default function Page() {
	const breadcrumbItems = [
		{ label: 'Dashboard', href: '/dashboard' },
		{ label: 'Home' },
	];

	return (
		<Breadcrumb items={breadcrumbItems}/>
	)
}
