import '../assets/css/main.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.jikan.moe/v4/characters?page=0&limit=242&q=saki&order_by=fav';

const Search = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(15);

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        const response = await axios.get(API_URL);
        setData(response.data.data);
    };
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / perPage);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <form className="inputSearchbar" action="" >
                <button type="submit"><i class="fa fa-search"></i></button>
                <input className='searchArea' type="text" placeholder="Search.." name="search2"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </form>
            <div className='matchingData' style={{ fontSize: "10px" }}>Total <span style={{ padding: "20px 0", fontWeight: "bold", fontSize: "18px" }}> {filteredData.length} </span> matching anime characters found</div>

            {filteredData.length ? (
                currentItems.map((person) => (
                    <div className="indexItem">
                        <table>
                            <tbody>
                                <tr className="profileSection">
                                    <th className="profileSectionIndex">
                                        <div className="profileInfo">
                                            <div className="profileImg">
                                                <img
                                                    className="proImg"
                                                    src={
                                                        person.images.webp
                                                            .image_url
                                                    }
                                                    title={person.name}
                                                />
                                            </div>
                                            <div className="profileName">
                                                <div className="profileTitleName">
                                                    {person.name}
                                                </div>
                                                <div className="profileNickName">
                                                    <span className="nicknameTitle">
                                                        {person.nicknames}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profileLike">
                                            &hearts;{" "}
                                            <span className="profileLikeTitle">
                                                {person.favorites}
                                            </span>
                                        </div>
                                    </th>
                                    <th className="profileArrow"><a href={person.url} target="_blank" className='tittleArrow'>&rarr;</a></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))
            ) : (
                <span
                    style={{
                        fontSize: "30px",
                        color: "red",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    No Results found!<br /><span style={{ color: "gray", fontSize: "10px", }}>Please enter tittle name!</span>
                </span>
            )}

            <span style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {currentPage > 1 && (
                    <button onClick={handlePrevPage}>Prev</button>
                )}
                {/* <span>{currentPage}</span> */}
                {currentPage < totalPages && (
                    <button onClick={handleNextPage}>Next</button>
                )}
            </span>
        </div>
    )
}

export default Search;