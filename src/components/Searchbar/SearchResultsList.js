import "../../assets/css/SearchResultsList.css";
import '../../assets/css/main.css'
import React, { useState } from 'react'
export const SearchResultsList = ({ results }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = results.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <div className='matchingData' style={{ fontSize: "10px" }}>Total <span style={{ padding: "20px 0", fontWeight: "bold", fontSize: "18px" }}> {results.length} </span> matching anime characters found</div>

            {setSearchTerm.length ? (
                results.map((result) => (
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
                                                        result.images.webp
                                                            .image_url
                                                    }
                                                    title={result.name}
                                                />
                                            </div>
                                            <div className="profileName">
                                                <div className="profileTitleName">
                                                    {result.name}
                                                </div>
                                                <div className="profileNickName">
                                                    <span className="nicknameTitle">
                                                        {result.nicknames}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profileLike">
                                            &hearts;{" "}
                                            <span className="profileLikeTitle">
                                                {result.favorites}
                                            </span>
                                        </div>
                                    </th>
                                    <th className="profileArrow"><a href={result.url} target="_blank" className='tittleArrow'>&rarr;</a></th>
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

        </div>
    );
};