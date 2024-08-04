import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
export default function Card({ name, email, id }) {
	async function handleDelete(id) {
		await deleteDoc(doc(db, `contacts/${id}`));
	}
	return (
		<div className="flex w-full items-center h-[50px] p-2 bg-orange-200 rounded-xl gap-2">
			<img
				src="/user.png"
				alt=""
				width={40}
				className="border-2 rounded-full border-blue-900 "
			/>
			<div className="flex-grow text-sm">
				<p className="font-bold">{name}</p>
				<p>{email}</p>
			</div>
			<DeleteForeverIcon
				className="cursor-pointer"
				onClick={() => handleDelete(id)}
				color="error"
			/>
		</div>
	);
}
