import { useState, useEffect } from "react";
import _orderBy from "lodash/orderBy";
import FilmContext from "contexts/FilmContext";
import FilmForm from "pages/FilmsPage/components/FilmForm";
import FilmsList from "pages/FilmsPage/components/FilmsList";
import TopNavigation from "components/TopNavigation";
import { generate as id } from "shortid";
// import LoginForm from "pages/LoginPage/components/LoginForm";
// import SignupForm from "pages/SignupPage/components/SignupForm";
import api from "api";

const sortFilms = (films) =>
	_orderBy(films, ["featured", "title"], ["desc", "asc"]);

const App = () => {
	const [films, setFilms] = useState([]);
	const [showAddForm, setShowAddForm] = useState(false);
	const [selectedFilm, setSelectedFilm] = useState({});

	useEffect(() => {
		api.films.fetchAll().then((films) => setFilms(sortFilms(films)));
	}, []);

	const showForm = (e) => {
		setShowAddForm(true);
		setSelectedFilm({});
	};

	const hideForm = (e) => {
		setShowAddForm(false);
		setSelectedFilm({});
	};

	const cols = showAddForm ? "ten" : "sixteen";

	const toggleFeatured = (id) => {
		setFilms((films) =>
			sortFilms(
				films.map((film) =>
					film._id === id ? { ...film, featured: !film.featured } : film
				)
			)
		);
	};

	const addFilm = (filmData) => {
		api.films
			.create(filmData)
			.then((film) => setFilms((x) => sortFilms([...x, { ...film }])));
		hideForm();
	};

	const updateFilm = (film) => {
		setFilms((x) => sortFilms(x.map((f) => (f._id === film._id ? film : f))));
		hideForm();
	};

	const saveFilm = (film) => {
		film._id ? updateFilm(film) : addFilm(film);
	};

	const deleteFilm = (film) => {
		setFilms((x) => sortFilms(x.filter((f) => f._id !== film._id)));
	};

	const selectedFilmForEdit = (selectedFilm) => {
		setSelectedFilm(selectedFilm);
		setShowAddForm(true);
	};

	const value = { toggleFeatured, selectedFilmForEdit, deleteFilm };

	return (
		<div className='ui container mt-3'>
			<FilmContext.Provider value={value}>
				<TopNavigation showForm={showForm} />

				{/* <div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						girfGap: "2rem",
					}}>
					<LoginForm />
					<SignupForm />
				</div> */}

				<div className='ui stackable grid'>
					{showAddForm && (
						<div className='six wide column'>
							<FilmForm
								film={selectedFilm}
								saveFilm={saveFilm}
								hideForm={hideForm}
							/>
						</div>
					)}
					<div className={`${cols} wide column`}>
						<FilmsList films={films} />
					</div>
				</div>
			</FilmContext.Provider>
		</div>
	);
};

export default App;
