import React, { useContext } from "react";
import FilmContext from "contexts/FilmContext";
import PropTypes from "prop-types";

const SelectButton = ({ film }) => {
	// return ()
};

const FilmCardButtons = ({ film }) => {
	const { selectedFilmForEdit } = useContext(FilmContext);
	const selectFilm = () => selectedFilmForEdit(film);

	return (
		<div className='extra content'>
			<div className='ui two buttons'>
				<span onClick={selectFilm} className='ui green basic button'>
					<i className='ui icon edit'></i>
				</span>
				<span className='ui red basic button'>
					<i className='ui icon trash'></i>
				</span>
			</div>
		</div>
	);
};

FilmCardButtons.propTypes = {
	film: PropTypes.object.isRequired,
};

export default FilmCardButtons;
