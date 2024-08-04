import InitialFocus from "./InitialFocuse";
import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
	return (
		<div className="max-w-[300px] mx-auto my-4 flex justify-between items-center gap-2">
			<div className="rounded p-1 bg-transparent border text-white flex-grow">
				<SearchIcon color="inherit" />
				<input
					type="text"
					className="outline-none border-none bg-transparent text-sm px-"
					placeholder="Search Contact"
				/>
			</div>
			<InitialFocus />
		</div>
	);
}
