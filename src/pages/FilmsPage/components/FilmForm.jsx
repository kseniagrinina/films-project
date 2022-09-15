import { useState, useRef } from "react";
import { genres, tags as tagsList } from "data";
import ImageLoader from "components/ImageLoader";
import FormMessage from "components/FormMessage";
import PropTypes from "prop-types";

const initialData = {
  title: "",
  img: "",
  description: "",
  director: "",
  duration: "",
  price: "",
  featured: false,
};

const FilmForm = ({ hideForm }) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const photoRef = useRef();

  const updatePhoto = (e) => {
    const file = photoRef.current.files && photoRef.current.files[0];

    if (file) {
      const img = "/img/" + file.name;
      setData((x) => ({ ...x, img }));
    }
  };

  const handleStringChange = (e) => {
    setData((x) => ({ ...x, [e.target.name]: e.target.value }));
    setErrors((x) => ({ ...x, [e.target.name]: "" }));
  };

  const handleNumberChange = (e) => {
    let value = parseFloat(e.target.value);
    value = isNaN(value) || value === 0 ? "" : Math.abs(value);
    setData((x) => ({ ...x, [e.target.name]: value }));
    setErrors((x) => ({ ...x, [e.target.name]: "" }));
  };

  const handleCheckboxChange = (e) => {
    setData((x) => ({ ...x, [e.target.name]: e.target.checked }));
  };

  const validate = (data) => {
    const errors = {};

    if (!data.title) errors.title = "Title cannot be blank";
    if (!data.img) errors.img = "Image cannot be blank";
    if (!data.description) errors.description = "Description cannot be blank";
    if (!data.director) errors.director = "Director cannot be blank";
    if (!data.duration) errors.duration = "Duration cannot be blank";
    if (!data.price) errors.price = "Price cannot be blank";
    if (parseInt(data.price) <= 0) errors.price = "Price must be higher than 0";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(data);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(data);
      setData(initialData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='ui form'>
      <div className='ui grid mb-3'>
        <div className='two column row'>
          <div className='ten wide column'>
            <div className={`field column ${errors.title ? "error" : ""}`}>
              <label htmlFor='title'>Film title</label>
              <input
                value={data.title}
                onChange={handleStringChange}
                type='text'
                name='title'
                id='title'
                placeholder='film title'
              />
              {errors.title && <FormMessage>{errors.title}</FormMessage>}
            </div>

            <div className={`field img-grid ${errors.img ? "error" : ""}`}>
              <label htmlFor='img'>Image</label>
              <input
                value={data.img}
                onChange={handleStringChange}
                name='img'
                id='img'
              />
              {errors.img && <FormMessage>{errors.img}</FormMessage>}

              <div className='inp-file'>
                <label htmlFor='photo'>Photo</label>
                <input
                  ref={photoRef}
                  onChange={updatePhoto}
                  type='file'
                  id='photo'
                />
              </div>
            </div>

            <div
              className={`column row field ${
                errors.description ? "error" : ""
              }`}>
              <label htmlFor='description'>Film description</label>
              <textarea
                value={data.description}
                onChange={handleStringChange}
                name='description'
                id='description'
                placeholder='film description'></textarea>
            </div>
            {errors.description && (
              <FormMessage>{errors.description}</FormMessage>
            )}
          </div>

          <div className='six wide column'>
            <ImageLoader
              src={data.img}
              alt={data.title}
              fallbackImg='https://via.placeholder.com/250x250'
              className='ui image imgfit'
            />
          </div>
        </div>

        <div className='three column row mb-3'>
          <div className={`column field ${errors.director ? "error" : ""}`}>
            <label htmlFor='director'>Director</label>
            <input
              value={data.director}
              onChange={handleStringChange}
              type='text'
              name='director'
              id='director'
              placeholder='film director'
            />
            {errors.director && <FormMessage>{errors.director}</FormMessage>}
          </div>

          <div className={`column field ${errors.duration ? "error" : ""}`}>
            <label htmlFor='duration'>Duration</label>
            <input
              value={data.duration}
              onChange={handleNumberChange}
              type='number'
              name='duration'
              id='duration'
              placeholder='Duration'
            />
            {errors.duration && <FormMessage>{errors.duration}</FormMessage>}
          </div>

          <div className={`column field ${errors.price ? "error" : ""}`}>
            <label htmlFor='price'>Price</label>
            <input
              value={data.price}
              onChange={handleNumberChange}
              type='number'
              name='price'
              id='price'
              placeholder='price'
            />
            {errors.price && <FormMessage>{errors.price}</FormMessage>}
          </div>
        </div>

        <div className='six wide column inline field'>
          <label htmlFor='featured'>Featured</label>
          <input
            checked={data.featured}
            onChange={handleCheckboxChange}
            type='checkbox'
            name='featured'
            id='featured'
          />
        </div>

        <div className='ui fluid buttons'>
          <button className='ui button primary' type='submit'>
            Save
          </button>
          <div className='or'></div>
          <span className='ui button' onClick={hideForm}>
            Hide form
          </span>
        </div>
      </div>
    </form>
  );
};

// const FilmForm = () => {
//   const [tags, setTags] = useState([]);
//   const [genre, setGenre] = useState("");
//   const [select, setSelect] = useState("");
//   const [multiSelect, setMultiSelect] = useState([]);

//   const handleTagsChange = (id) => {
//     setTags((x) => (x.includes(id) ? x.filter((v) => v !== id) : [...x, id]));
//   };

//   const handleGenreChange = (genre) => {
//     setGenre(genre);
//   };

//   const handleSelectChange = (e) => {
//     const { value } = e.target;

//     if (Number(value) === -1) {
//       alert("Choose option");
//       return;
//     }
//     setSelect(value);
//   };

//   const handleMultiSelect = (e) => {
//     const multipleSelect = [...e.target.selectedOptions].map(
//       (option) => option.value
//     );
//     setMultiSelect(multipleSelect);
//   };

//   return (
//     <form className='ui form'>
//       <div className='ui grid'>
//         <div className='four wide column'>
//           {/*  =========================  tags  ================  */}
//           <div className='grouped fields'>
//             <label>Tags</label>

//             {tagsList.map((tag) => (
//               <div className='field' key={tag._id}>
//                 <div className='ui checkbox field'>
//                   <input
//                     type='checkbox'
//                     id={`tag-${tag._id}`}
//                     onChange={() => handleTagsChange(tag._id)}
//                     checked={tags.includes(tag._id)}
//                   />
//                   <label htmlFor={`tag-${tag._id}`}>{tag.title}</label>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/*  ==============================   genre ================  */}
//         <div className='four wide column'>
//           <div className='grouped fields'>
//             <label>Genres</label>
//             {genres.map((genre) => (
//               <div key={genre._id} className='ui radio checkbox field'>
//                 <input
//                   onChange={() => handleGenreChange(genre._id)}
//                   checked={genre === genre._id}
//                   id={`genre-${genre._id}`}
//                   type='radio'
//                   name='example2'
//                 />
//                 <label htmlFor={`genre-${genre._id}`}>{genre.title}</label>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/*  ============================== select ================  */}
//         <div className='four wide column'>
//           <select
//             className='ui dropdown'
//             value={select}
//             onChange={handleSelectChange}>
//             <option value='-1'>Select</option>
//             {genres.map((genre) => (
//               <option key={genre._id} value={genre._id}>
//                 {genre.title}
//               </option>
//             ))}
//           </select>
//         </div>
//         {/*  ==============================  multipleSelect ================  */}
//         <div className='four wide column'>
//           <select
//             multiple
//             size={genres.length}
//             value={multiSelect}
//             onChange={handleMultiSelect}>
//             {genres.map((genre) => (
//               <option value={genre._id} key={genre._id}>
//                 {genre.title}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* ====================================================== */}
//     </form>
//   );
// };

FilmForm.propTypes = {
  hideForm: PropTypes.func.isRequired,
};

export default FilmForm;
