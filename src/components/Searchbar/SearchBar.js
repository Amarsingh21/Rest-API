import { useState } from "react";
import "../../assets/css/SearchBar.css";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = (value) => {
        fetch("https://api.jikan.moe/v4/characters?page=0&limit=242&q=saki&order_by=fav")
            .then((response) => response.json())
            .then((json) => {
                const results = json.data.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div className="indexSearch">
                <div className="input-wrapper">
                    <i class="fa fa-search"></i>
                    <input
                        placeholder="Type to search..."
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
};