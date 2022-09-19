import React, { useState } from "react";
import PropTypes from "prop-types";
import Featured from "components/Featured";
import FilmCardButtons from "./FilmCardButtons";

const FilmCard = ({ film }) => {
	// const [descriptionVisible, setDescriptionVisible] = useState(false);

	// const handleDescription = () => {
	// 	setDescriptionVisible((x) => !x);
	// };

	return (
		<div className='ui card'>
			<Featured item={film} />

			{/* {descriptionVisible ? (
				<div className='content' style={{ flexGrow: 1 }}>
					<p>{film.description}</p>
				</div>
			) : ( */}
			<div className='image'>
				<span className='ui green label ribbon'>$ {film.price}</span>
				<img src={film.img} alt={film.title} />
			</div>
			{/* )} */}

			<div className='content'>
				<span className='header'>{film.title}</span>
				<div className='meta'>
					<i className='icon users'></i> {film.director}
					<span className='right floated'>
						<i className='icon wait right'></i> {film.duration}
					</span>
				</div>
				{/* <i
					className={`icon eye link ${descriptionVisible && "slash"}`}
					onClick={handleDescription}></i> */}
			</div>
			<FilmCardButtons film={film} />
		</div>
	);
};

FilmCard.propTypes = {
	film: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		director: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		featured: PropTypes.bool.isRequired,
	}),
};

FilmCard.defaultProps = {
	film: {},
};

export default React.memo(FilmCard);
