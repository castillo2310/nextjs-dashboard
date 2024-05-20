import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTableColumns,
	faGaugeHigh,
	faGear,
	faPalette,
	faListUl,
	faArrowsRotate, faMap, faCircle
} from '@fortawesome/free-solid-svg-icons'
import {faFortAwesome} from "@fortawesome/free-brands-svg-icons";

export default function SideNav() {
	return (
		<aside className="h-screen sticky top-0 overflow-y-auto w-60 py-6 px-4 bg-base-200">
			<a className="btn btn-ghost">
				<span className="fa-layers fa-fw fa-lg me-3">
					<FontAwesomeIcon icon={faCircle} size="2x"/>
					<FontAwesomeIcon icon={faFortAwesome} transform="shrink-6" inverse  size="2x" />
				</span>
				<span>
					ccastillo.es
				</span>
			</a>

			<ul className="menu px-0">
				<li className="menu-title">Analytics</li>
				<li>
					<a className="active">
						<FontAwesomeIcon icon={faTableColumns} />
						Dashboard
					</a>
				</li>
				<li>
					<a>
						<FontAwesomeIcon icon={faGaugeHigh} />
						Performance
					</a>
				</li>

				<li className="menu-title">Contents</li>
				<li>
					<a>
						<FontAwesomeIcon icon={faMap} />
						Guides
					</a>
				</li>
				<li>
					<a>
						<FontAwesomeIcon icon={faArrowsRotate} />
						Hotspots
					</a>
				</li>
				<li>
					<a>
						<FontAwesomeIcon icon={faListUl} />
						Checklists
					</a>
				</li>

				<li className="menu-title">Customization</li>
				<li>
					<a>
						<FontAwesomeIcon icon={faPalette} />
						Themes
					</a>
				</li>
				<li>
					<a>
						<FontAwesomeIcon icon={faGear} />
						Configuration
					</a>
				</li>
			</ul>
		</aside>
	);

}
