import React from 'react';

const Card = ({name, username, email, id}) => {
	return (
		<div className="tc bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5">
			<img src={ `https://robohash.org/${id}200x200` } alt ="robots" />
			<div>
				<h2>{name}</h2>
				<h3>{username}</h3>
				<p>{email}</p>
			</div>
		</div>

	);
}
export default Card;