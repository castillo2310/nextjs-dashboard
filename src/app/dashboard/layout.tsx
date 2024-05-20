import SideNav from "@/components/dashboard/sidenav";
import Footer from "@/components/dashboard/footer";
import Navbar from "@/components/dashboard/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex">
			<SideNav/>
			<div className="flex flex-col flex-1">
				<Navbar/>
				<main className="flex-1 p-4">
					{children}
				</main>
				<Footer/>
			</div>

		</div>
	);
}
