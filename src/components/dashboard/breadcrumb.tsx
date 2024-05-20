import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	console.log(items)
	return (
		<div className="text-sm breadcrumbs">
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item.href ? (
							<Link href={item.href}>{item.label}</Link>
						) : (
							item.label
						)}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Breadcrumb;
