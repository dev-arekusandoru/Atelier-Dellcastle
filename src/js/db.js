import { database, storage } from './firebase.js';
import {
	ref,
	set,
	child,
	push,
	get,
	remove
} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js';
import {
	uploadBytes,
	ref as sRef,
	getDownloadURL,
	deleteObject
} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js';

export async function readData(path) {
	return await get(child(ref(database), path))
		.then((snapshot) => {
			if (snapshot.exists()) {
				return snapshot.val();
			} else {
				console.log('No data available');
			}
		})
		.catch((error) => {
			console.error(error);
		});
}

export async function generateGalleryPage(item) {
	let body = document.getElementById(`${item}-body`);
	let bodyData = await readData(item);
	let bodyBuild = ``;
	bodyData = bodyData ? Object.entries(bodyData) : [];
	bodyData.forEach((entry) => {
		let data = entry[1];
		if (data.hidden && data.hidden == true) return;
		bodyBuild += generateItem(
			data.name,
			data.details,
			data.img['url']
				? data.img['url']
				: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1920px-SMPTE_Color_Bars.svg.png',
			data.price
		);
	});
	body.innerHTML = bodyBuild;
}

export async function generateFeaturedPage() {
	let categories = ['boards', 'kumiko', 'boxes', 'inlay'];
	let body = document.getElementById(`featured-body`);
	let bodyBuild = ``;
	categories.forEach((category) => {
		readData(category).then((data) => {
			data = data ? Object.entries(data) : [];
			data.forEach((entry) => {
				let item = entry[1];
				if (item.hidden && item.hidden == true) {
					return;
				} else if (item.featured && item.featured == true) {
					bodyBuild += generateItem(
						item.name,
						item.details,
						item.img['url']
							? item.img['url']
							: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1920px-SMPTE_Color_Bars.svg.png'
					);
				}
			});
			body.innerHTML = bodyBuild;
		});
	});
}

export async function writeItem(
	path,
	name,
	description,
	imgId,
	imgURL,
	featured
) {
	let write = {
		name: name,
		details: description,
		img: { id: imgId, url: imgURL },
		featured: featured,
		hidden: false
	};
	push(ref(database, path), write)
		.then(() => {
			alert('upload success');
		})
		.catch(() => {
			alert('insufficient permission');
		});
}

export async function uploadImage(path, file) {
	let newId = generateId();
	let storageRef = sRef(storage, path + '/' + newId);
	return await uploadBytes(storageRef, file).then((snapshot) => {
		return getDownloadURL(sRef(storage, path + '/' + newId)).then((url) => {
			let r = { id: newId, url: url };
			return r;
		});
	});
}

function generateEditItem(
	path,
	id,
	name,
	description,
	price,
	imgId,
	imgUrl,
	featured,
	hidden
) {
	return `<div class="flex flex-col gap-3 border-2 border-offblack w-full p-2" id="${id}}">
            <label class="flex flex-col" for="${id}-name"
              >Name:
              <input
                id="${id}-name"
                type="text"

                value="${name}"
                class="outline-none bg-offwhite border-b border-offblack"
              />
            </label>
            <label class="flex flex-col" for="${id}-description"
              >Description:
              <input
                id="${id}-desc"
                type="text"
                value="${description}"
                class="outline-none bg-offwhite border-b border-offblack"
              />
            </label>
            <label class="flex flex-col" for="${id}-price"
              >Price:
              <input
                id="${id}-price"
                type="number"
                value="${price || 0}"
                class="outline-none bg-offwhite border-b border-offblack"
              />
            </label>
            <div
              id="${id}-img-container"
              class="hidden flex items-center justify-center w-full aspect-square border border-offblack"
            >
            </div>
            <span id="${id}-img-id" class="hidden">${imgId}</span>
            <span id="${id}-img-url" class="hidden">${imgUrl}</span>
            <div class="flex flex-row gap-2 justify-center">
              <input
                class="${
					imgUrl != '' ? '' : 'hidden'
				} w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Show Image"
                name="${id}-toggleimg"
                id="${id}-toggleimg"
                onclick="toggleImg('${id}', '${imgUrl}')"
              />
              <input
                class="${
					imgUrl != '' ? '' : 'hidden'
				} image-delete w-[49%] h-[30px] text-md border-2 border-red-600 text-red-600 hover:text-offwhite hover:bg-red-600 hover:border-red-600 hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Delete Image"
                name="${id}-deleteimg"
                id="${id}/deleteimg"
              />
              <label class="${
					imgUrl == '' ? 'flex items-center justify-center' : 'hidden'
				} w-full h-[30px] text-center text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                for="${id}/uploadimg"
                id="${id}/uploadimg-lbl"    
              >
              Upload Image
                <input
                  class="img-upload hidden"
                  type="file"
                  accept=".jpg"
                  name="${id}-uploadimg"
                  id="${id}/uploadimg"
                />
              </label>
            </div>
            ${checkbox(id, 'Featured', featured)}
            ${checkbox(id + '-hide', 'Hidden', hidden)}
            <div class="flex flex-col gap-2 justify-center">
              <div class="flex flex-row gap-2 justify-center">
                <input
                  class="item-reset w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                  type="submit"
                  value="Reset"
                  name="${id}-reset"
                  id="${id}/reset"
                />
                <input
                  class="item-update w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                  type="submit"
                  value="Update"
                  name="${id}-update"
                  id="${id}/update"
                />
              </div>
              <input
                class="item-delete w-full h-[30px] text-md border-2 border-red-600 text-red-600 hover:text-offwhite hover:bg-red-600 hover:border-red-600 hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Delete"
                name="${id}-delete"
                id="${id}/delete"
              />
            </div>
          </div>`;
}

export async function generateEditPage(path) {
	let data = await readData(path);
	let items = '';
	if (data != undefined && data != null) {
		Object.entries(data).forEach((item) => {
			items += generateEditItem(
				path,
				item[0],
				item[1].name,
				item[1].details,
				item[1].price,
				item[1].img['id'],
				item[1].img['url'],
				item[1].featured,
				item[1].hidden
			);
		});
	}
	document.getElementById('edit-items').innerHTML = items;
	await addUpdateListener(path);
	addResetListener(path);
	addDeleteListener(path);
	addDeleteImageListener(path);
	addUploadImageListeners(path);
}

async function addUpdateListener(path) {
	Array.from(document.getElementsByClassName('item-update')).forEach(
		(element) => {
			element.addEventListener('mouseup', (e) => {
				e.preventDefault();
				let id = element.id.split('/')[0];
				let name = document.getElementById(`${id}-name`).value;
				let description = document.getElementById(`${id}-desc`).value;
				let price = document.getElementById(`${id}-price`).value;
				let featured = document.getElementById(
					`${id}-checkbox`
				).checked;
				let hidden = document.getElementById(
					`${id}-hide-checkbox`
				).checked;
				let imgId = document.getElementById(`${id}-img-id`).innerHTML;
				let imgUrl = document.getElementById(`${id}-img-url`).innerHTML;
				let data = {
					name: name,
					details: description,
					price: price,
					featured: featured,
					hidden: hidden,
					img: {
						id: imgId,
						url: imgUrl
					}
				};
				let itemRef = path + '/' + id;
				set(ref(database, itemRef), data);
			});
		}
	);
}

async function resetData(path, element) {
	let allData = await readData(path);
	let id = element.id.split('/')[0];
	let data = allData[id];
	let resetName = document.getElementById(`${id}-name`);
	let resetDesc = document.getElementById(`${id}-desc`);
	let resetFeatured = document.getElementById(`${id}-checkbox`);
	let resetHidden = document.getElementById(`${id}-hide-checkbox`);

	resetName.value = data.name;
	resetDesc.value = data.details;
	if (data.featured == true) {
		resetFeatured.checked = true;
		toggleCheckbox(id);
	} else {
		resetFeatured.checked = false;
		toggleCheckbox(id);
	}
	if (data.hidden == true) {
		resetHidden.checked = true;
		toggleCheckbox(id + '-hide');
	} else {
		resetHidden.checked = false;
		toggleCheckbox(id + '-hide');
	}
}

async function addResetListener(path) {
	Array.from(document.getElementsByClassName('item-reset')).forEach(
		(element) => {
			element.addEventListener('mouseup', (e) => {
				resetData(path, element);
			});
		}
	);
}

function deleteItem(path, id, imgId) {
	let rPath = path + '/' + id;

	remove(ref(database, rPath)).then(() => {
		if (imgId && imgId.length > 0) deleteImage(path, imgId);
		generateEditPage(path);
	});
}

function addDeleteListener(path) {
	Array.from(document.getElementsByClassName('item-delete')).forEach(
		(element) => {
			element.addEventListener('mouseup', (e) => {
				let id = element.id.split('/')[0];
				let imgId = document.getElementById(id + '-img-id').innerHTML;
				deleteItem(path, element.id.split('/')[0], imgId);
			});
		}
	);
}

function deleteImage(path, id, imgId) {
	let imgRef = sRef(storage, path + '/' + imgId);
	deleteObject(imgRef).then(() => {
		set(ref(database, `${path}/${id}/img`), { id: '', url: '' });
		document.getElementById(id + '/deleteimg').classList.add('hidden');
		document.getElementById(id + '-toggleimg').classList.add('hidden');
		document
			.getElementById(id + '/uploadimg-lbl')
			.classList.remove('hidden');
	});
}

function addDeleteImageListener(path) {
	Array.from(document.getElementsByClassName('image-delete')).forEach(
		(element) => {
			let id = element.id.split('/')[0];
			let imgId = document.getElementById(id + '-img-id').innerHTML;
			element.addEventListener('mouseup', (e) => {
				deleteImage(path, id, imgId);
			});
		}
	);
}

function addUploadImageListeners(path) {
	let imgUploads = document.getElementsByClassName('img-upload');
	Array.from(imgUploads).forEach((imgUpload) => {
		let id = imgUpload.id.split('/')[0];
		imgUpload.addEventListener('change', () => {
			if (imgUpload.checkValidity()) {
				let newImg = imgUpload.files[0];
				uploadImage(path, newImg).then((data) => {
					let newData = {
						id: data.id,
						url: data.url
					};
					set(ref(database, `${path}/${id}/img`), newData).then(
						() => {
							document
								.getElementById(id + '/deleteimg')
								.classList.remove('hidden');
							document
								.getElementById(id + '-toggleimg')
								.classList.remove('hidden');
							document
								.getElementById(id + '/uploadimg-lbl')
								.classList.add('hidden');
						}
					);
				});
			}
		});
	});
}

export function generateId() {
	return push(ref(database)).key;
}
