import React from 'react';

const ListGroupsfc = (props) => {
    //return null;
    const { genres, handelGenreSelect, SelectGenre } = props;
    
    


    return <ul className="list-group">
        {

            genres.map(genre => (
                <li key={genre._id} id={genre._id}
                    onClick={() => handelGenreSelect(genre)}
                    className={genre._id === SelectGenre._id ? "list-group-item active" : "list-group-item"}
                >
                    {genre.name}
                </li>
            ))
        }

    </ul>

}

export default ListGroupsfc;