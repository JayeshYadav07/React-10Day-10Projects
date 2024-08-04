import { useEffect } from "react";
import "./App.css";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import Card from "./components/Card";
import Search from "./components/Serch";
import Header from "./components/Herder";

export default function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const collectionRef = collection(db, "contacts");

		getDocs(collectionRef).then((querySnapshot) => {
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setData(newData);
		});
	}, []);

	return (
		<div className="bg-gray-700 px-2 py-4 min-h-screen">
			<Header />
			<Search />
			<div className="flex max-w-[300px] mx-auto gap-3 flex-col h-[70%] scroll-my-0">
				{data.map((item) => {
					return (
						<Card
							key={item.id}
							id={item.id}
							name={item.name}
							email={item.email}
						/>
					);
				})}
			</div>
		</div>
	);
}
