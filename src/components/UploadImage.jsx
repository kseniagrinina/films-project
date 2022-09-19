import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useAsync from "hooks/useAsync";
import { Spinner } from "styles/app";

const fallbackImg = "https://via.placeholder.com/250x250";
const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
const MAX_SIZE = 1000000;

const UploadImage = ({ img, updatePhoto }) => {
	const [file, setFile] = useState(null);
	const [renderImg, setRenderImg] = useState(fallbackImg);
	const [imgError, setImgError] = useState(null);
	const { data, isError, isSuccess, isLoading, isIdle, error, run } =
		useAsync();

	useEffect(() => {
		if (img) {
			setRenderImg(img);
		} else {
			setRenderImg(fallbackImg);
		}
	}, [img]);

	const fileRef = useRef();

	function selectFile() {
		const file = fileRef.current.files && fileRef.current.files[0];

		if (!file) {
			return;
		}

		const imgTooLarge = file.size > MAX_SIZE;

		if (!allowedTypes.includes(file.type) || imgTooLarge) {
			const message = imgTooLarge
				? "Size of the file you are trying to upload exceeds allowed file size."
				: "This file type is not supported.";
			setImgError(message);
			return;
		}
		setFile(file);
	}

	async function handleFile(e) {
		if (!file || imgError) {
			return;
		}

		const formData = new FormData();

		formData.append("file", file);

		await run(
			axios.post("/api/upload", formData).then(async (res) => {
				// await new Promise((resolve) => setTimeout(resolve, 2000));
				updatePhoto(res.data.file);
				setRenderImg(res.data.file);
				setFile(null);
				return res.data;
			})
		);
	}

	return (
		<div className='upload-box'>
			<div className='image-box'>
				<img src={renderImg} alt='Placeholder img' />
				<label
					disabled={isLoading}
					htmlFor='photo'
					className='image-box__label'>
					Choose
				</label>
			</div>
			<input ref={fileRef} onChange={selectFile} type='file' id='photo' />
			<button
				onClick={handleFile}
				className='ui basic red button btn-upload'
				type='button'>
				Upload {isLoading && <Spinner />}
			</button>
			{file && <span>{file.name}</span>}
		</div>
	);
};

export default UploadImage;
