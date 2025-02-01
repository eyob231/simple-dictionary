import data from './en-amh.json';
import { useState } from 'react';

function Search() {
    const [search, setSearch] = useState('');

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>
            </div>
            <table className="table">
                <thead>
                    <tr key="header">
                        <th>Id</th>
                        <th>Type</th>
                        <th>English</th>
                        <th>Amharic</th>
                        <th>Tigrinya</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .filter((item) => {
                            return (
                                search.toLowerCase() === '' ||
                                item.english.toLowerCase().includes(search.toLowerCase())
                            );
                        })
                        .map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.type}</td>
                                <td>{item.english}</td>
                                <td>{item.amharic}</td>
                                <td>{item.tigrigna}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
}

export default Search;