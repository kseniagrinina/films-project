import { useState } from "react";
import { genres, tags as tagsList } from "data";

const FilmForm = () => {
  const [tags, setTags] = useState([]);
  const [genre, setGenre] = useState("");
  const [select, setSelect] = useState("");
  const [multiSelect, setMultiSelect] = useState([]);

  const handleTagsChange = (id) => {
    setTags((x) => (x.includes(id) ? x.filter((v) => v !== id) : [...x, id]));
  };

  const handleGenreChange = (genre) => {
    setGenre(genre);
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;

    if (Number(value) === -1) {
      alert("Choose option");
      return;
    }
    setSelect(value);
  };

  const handleMultiSelect = (e) => {
    const multipleSelect = [...e.target.selectedOptions].map(
      (option) => option.value
    );
    setMultiSelect(multipleSelect);
  };

  return (
    <form className='ui form'>
      <div className='ui grid'>
        <div className='four wide column'>
          {/*  =========================  tags  ================  */}
          <div className='grouped fields'>
            <label>Tags</label>

            {tagsList.map((tag) => (
              <div className='field' key={tag._id}>
                <div className='ui checkbox field'>
                  <input
                    type='checkbox'
                    id={`tag-${tag._id}`}
                    onChange={() => handleTagsChange(tag._id)}
                    checked={tags.includes(tag._id)}
                  />
                  <label htmlFor={`tag-${tag._id}`}>{tag.title}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  ==============================   genre ================  */}
        <div className='four wide column'>
          <div className='grouped fields'>
            <label>Genres</label>
            {genres.map((g) => (
              <div key={g._id} className='ui radio checkbox field'>
                <input
                  onChange={() => handleGenreChange(g._id)}
                  checked={genre === g._id}
                  id={`genre-${g._id}`}
                  type='radio'
                  name='example2'
                />
                <label htmlFor={`genre-${g._id}`}>{g.title}</label>
              </div>
            ))}
          </div>
        </div>
        {/*  ============================== select ================  */}
        <div className='four wide column'>
          <select
            className='ui dropdown'
            value={select}
            onChange={handleSelectChange}>
            <option value='-1'>Select</option>
            {genres.map((g) => (
              <option key={g._id} value={g._id}>
                {g.title}
              </option>
            ))}
          </select>
        </div>
        {/*  ==============================  multipleSelect ================  */}
        <div className='four wide column'>
          <select
            multiple
            size={genres.length}
            value={multiSelect}
            onChange={handleMultiSelect}>
            {genres.map((g) => (
              <option value={g._id} key={g._id}>
                {g.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ====================================================== */}
    </form>
  );
};

export default FilmForm;
