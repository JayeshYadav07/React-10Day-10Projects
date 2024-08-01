/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    const [filter_data, setFilterData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    function filteredData(type = false, text = false) {
        let filtered_data = data.filter((item) => {
            if (text !== false) return item.name.toLowerCase().includes(text);
            else return item.type.includes(type) || type == "All";
        });
        setFilterData(filtered_data);
    }
    useEffect(() => {
        setLoading(true);
        axios
            .get("./api.json")
            .then((res) => {
                setLoading(false);
                setData(res.data);
                setFilterData(res.data);
            })
            .catch((error) => setError(error));
    }, []);
    if (loading) {
        return <div> loading ... </div>;
    }
    if (error) {
        return <div> {error}</div>;
    }
    return (
        <div>
            <TopContainer filteredData={filteredData} />
            <div className="bg-[url('/background.png')] bg-cover min-h-[550px]">
                <div className="max-w-[1000px] mx-auto flex flex-wrap gap-10 justify-center pt-10">
                    {filter_data.map((item) => (
                        <FoodCard key={item.name} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// container
function FoodCard({ item }) {
    return (
        <div className="bg-slate-100 p-4 w-[250px] rounded flex flex-col gap-3">
            <img src={item.imgUrl} alt="img" />
            <p className="font-bold">{item.name}</p>
            <p className="text-gray-700">{item.desc}</p>
        </div>
    );
}
function TopContainer({ filteredData }) {
    return (
        <div className="bg-gray-700">
            <div className="max-w-[1200px] mx-auto py-10">
                <div className="flex justify-between items-center">
                    <img src="/logo.png" alt="" />
                    <SearchContainer filteredData={filteredData} />
                </div>
                <FilterContainer filteredData={filteredData} />
            </div>
        </div>
    );
}
function SearchContainer({ filteredData }) {
    function handleFilter(text) {
        filteredData("", text);
    }
    return (
        <div>
            <input
                onChange={(e) => handleFilter(e.target.value)}
                type="text"
                placeholder="Search Food ..."
                className="border-2 border-red-500 outline-none px-4 py-2 rounded-md bg-transparent text-white"
            />
        </div>
    );
}
function FilterContainer({ filteredData }) {
    function handleFilter(type) {
        filteredData(type);
    }
    const filterBtn = ["All", "Breakfast", "Lunch", "Dinner"];
    return (
        <div className="flex gap-5 justify-center mt-5">
            {filterBtn.map((type) => {
                return (
                    <button
                        onClick={() => handleFilter(type)}
                        key={type}
                        className="px-3 py-1 bg-red-500 rounded text-white"
                    >
                        {type}
                    </button>
                );
            })}
        </div>
    );
}

export default App;
