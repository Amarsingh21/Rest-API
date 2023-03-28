import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/main.css'
export default class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            filteredItems: props.items,
            persons: []
        };
    }
    handleSearch = (event) => {
        const query = event.target.value;
        let filteredPersons = [];
        if (this.state.persons) {
            filteredPersons = this.state.persons.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase());
            });
        }
        this.setState({
            searchQuery: query,
            filteredPersons: filteredPersons
        });
    }

    componentDidMount() {
        axios.get(`https://api.jikan.moe/v4/characters?page=0&limit=15&q=saki&order_by=fav`)
            .then(res => {
                const persons = res.data.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
                <form className="inputSearchbar" action="" >
                    <button type="submit"><i class="fa fa-search"></i></button>
                    <input className='searchArea' type="text" placeholder="Search.." name="search2" />
                </form>
                <div className='matchingData' style={{ fontSize: "10px" }}>Total 225 matching anime characters found</div>

                {
                    this.state.persons.map(person =>
                        <div className='indexItem'>
                            <table>
                                <tbody>
                                    <tr className='profileSection'>
                                        <th className='profileSectionIndex'>
                                            <div className='profileInfo'>
                                                <div className='profileImg'>
                                                    <img className='proImg' src={person.images.webp.image_url} title={person.name} />
                                                </div>
                                                <div className='profileName'>
                                                    <div className='profileTitleName'>{person.name}</div>
                                                    <div className='profileNickName'>
                                                        <span className='nicknameTitle'>{person.nicknames}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='profileLike'>&hearts; <span className='profileLikeTitle'>2222</span></div>
                                        </th>
                                        <th className='profileArrow'>&rarr;</th>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        )
    }
}