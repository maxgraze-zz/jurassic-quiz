import axios from 'axios';
import { env } from '$env/dynamic/private';

const data = {
	id: 1,
	character: 'Expert',
	score: 80
};

// let data2 = "foobar"
// let json = JSON.stringify(data)
// // let json = `submission=${JSON.stringify(data2)}`
// axios.post("https://script.google.com/macros/s/AKfycbyu3NvslUhI8BvDZtQVoJDXiSCzP-iS-Bsxu_1WWMmnTAKoEun2HIeNUrk8WAhMh4BYKA/exec", json)
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });
// }

// const data = {
//     id: 1,
//     character: 'Expert',
//     score: 80
// }
let url = 'https://sheet.best/api/sheets/900db643-df32-4d90-b995-584ff14e8cd9';
// let url = "https://script.google.com/macros/s/AKfycbzdt8mJT-1FaDiLaDx7HEisE5Wq6tycRXOEgT7z4j0N8PgMDd4WXKZcE2t15ab9O8srXA/exec"
// export default async function doPost () {
//     const res = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         // mode: 'no-cors',
//         headers: {
//             				'Content-Type': 'application/json',
//                             "Access-Control-Allow-Origin": 'https://localhost:3000',
//                             "withCredentials": "true"
//             				// 'Content-Type': 'application/x-www-form-urlencoded',
//             			},
//     })

//     const json = await res.json()
//     let result = JSON.stringify(json)
//     console.log(result)
// }
// export default async function doPost () {
// 		const res = await fetch(url, {
// 			method: 'POST',
// 			body: JSON.stringify(data),
// mode: 'no-cors', // no-cors, *cors, same-origin,
// 			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// 			credentials: 'same-origin',
// 			headers: {
// 				'Content-Type': 'application/json',
//                 // "Access-Control-Allow-Origin": 'true',
//                 // "withCredentials": "true"
// 				// 'Content-Type': 'application/x-www-form-urlencoded',
// 			},
// 		})

// 		const json = await res.json()
// 		let result = JSON.stringify(json)
// 	}

export default function doPost() {
	// let json = JSON.stringify(data)
	// let json = `submission=${JSON.stringify(data2)}`

	axios
		.post(url, data)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}
