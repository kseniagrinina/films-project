import { useState } from "react";
import { genres, tags as tagsList } from "data";

const initialData = {
  title: "",
  img: "",
  description: "",
  director: "",
  duration: "",
  price: "",
  featured: false,
};

const FilmForm = () => {
  const [data, setData] = useState(initialData);

  const handleStringChange = (e) => {
    setData((x) => ({ ...x, [e.target.name]: e.target.value }));
  };

  const handleNumberChange = (e) => {
    let value = parseFloat(e.target.value);
    value = isNaN(value) || value === 0 ? "" : Math.abs(value);
    setData((x) => ({ ...x, [e.target.name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setData((x) => ({ ...x, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className='ui form'>
      <div className='ui grid mb-3'>
        <div className='two column row'>
          <div className='ten wide column'>
            <div className='field'>
              <label htmlFor='title'>Film title</label>
              <input
                value={data.title}
                onChange={handleStringChange}
                type='text'
                name='title'
                id='title'
                placeholder='film title'
              />
              <div style={{ color: "#9a3f38" }}>title error</div>
            </div>

            <div className='field img-grid'>
              <label htmlFor='img'>Image</label>
              <input
                value={data.img}
                onChange={handleStringChange}
                name='img'
                id='img'
              />

              <div className='inp-file'>
                <label htmlFor='photo'>Photo</label>
                <input type='file' id='photo' />
              </div>
            </div>

            <div className='column row field'>
              <label htmlFor='description'>Film description</label>
              <textarea
                value={data.description}
                onChange={handleStringChange}
                name='description'
                id='description'
                placeholder='film description'></textarea>
            </div>
          </div>

          <div className='six wide column'>
            <img
              src='http://via.placeholder.com/250x250'
              className='ui image imgfit'
            />
          </div>
        </div>

        <div className='three column row'>
          <div className='column field'>
            <label htmlFor='director'>Director</label>
            <input
              value={data.director}
              onChange={handleStringChange}
              type='text'
              name='director'
              id='director'
              placeholder='film director'
            />
          </div>

          <div className='column field'>
            <label htmlFor='duration'>Duration</label>
            <input
              value={data.duration}
              onChange={handleNumberChange}
              type='number'
              name='duration'
              id='duration'
              placeholder='Duration'
            />
          </div>

          <div className='column field'>
            <label htmlFor='price'>Price</label>
            <input
              value={data.price}
              onChange={handleNumberChange}
              type='number'
              name='price'
              id='price'
              placeholder='price'
            />
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
          <span className='ui button'>Hide form</span>
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
//             {genres.map((g) => (
//               <div key={g._id} className='ui radio checkbox field'>
//                 <input
//                   onChange={() => handleGenreChange(g._id)}
//                   checked={genre === g._id}
//                   id={`genre-${g._id}`}
//                   type='radio'
//                   name='example2'
//                 />
//                 <label htmlFor={`genre-${g._id}`}>{g.title}</label>
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
//             {genres.map((g) => (
//               <option key={g._id} value={g._id}>
//                 {g.title}
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
//             {genres.map((g) => (
//               <option value={g._id} key={g._id}>
//                 {g.title}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* ====================================================== */}
//     </form>
//   );
// };

export default FilmForm;
