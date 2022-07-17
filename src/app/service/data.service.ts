// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import * as global from 'src/app/globals';
// import { environment } from 'src/environments/environment';
// import { GlobalService } from './global.service';
// import { Subject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import * as AllActiveSummary from '../../assets/data/GetAllActiveCommunicationSummary.json'
// @Injectable({
// 	providedIn: 'root'
// })

// export class DataService {


// 	auth = 'test1';
// 	GLOBAL_AUTH_KEY = 'test';

// 	constructor(private httpClient: HttpClient, private globalService: GlobalService) { }

// 	doLogin(userName, password) {
// 		const input = JSON.stringify({
// 			userName: userName,
// 			passwords: password

// 		});
// 		const httpHeaders = new HttpHeaders({
// 			'content-type': 'application/json',
// 			'cache-control': 'no-cache'

// 		});
// 		const options = {
// 			headers: httpHeaders
// 		};
// 		console.log(environment[global.env].API_URL);
// 		localStorage.setItem("Envurl", environment[global.env].API_URL);
// 		return this.httpClient.post(environment[global.env].API_URL + '/api/Common/GetUserDetails', input, options);
// 	}

// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment'



@Injectable({
	providedIn: 'root'
})
// var details: any = JSON.parse(localStorage.getItem('token'));

export class DataService {

	token: any = JSON.parse(localStorage.getItem('token') || '{}');
	role: string = localStorage.getItem('role') as string;

	constructor(private httpClient: HttpClient,) { }


	doLogin(userName: string, password: string) {
		const input = JSON.stringify({
			username: userName,
			password: password

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.post(environment.stage.API_URL + 'api/Login/SignIn', input, options);
	}

	doSignup(userName: string, password: string) {
		const input = JSON.stringify({
			username: userName,
			password: password

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache'

		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.post(environment.stage.API_URL + 'api/Login/SignUp', input, options);
	}

	//Vehicle
	getVehicleData() {
		// const input = JSON.stringify({
		// 	username: userName,
		// 	password: password

		// });
		console.log('token', this.token)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,
			// 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTcxNjI1NTYsImlzcyI6ImFzaGxrYWRzMDEyIiwiYXVkIjoiYXNobGthZHMwMTIifQ.ncuz5lIbVUG37_Zvgs_z9d9STfuqCfG8E92LBZmTMUw`
		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.get(environment.stage.API_V_URL + 'api/Vehicle/Vehicles', options);
	}

	deleteVehicleData(regno: any) {
		// const input = JSON.stringify({
		// 	username: userName,
		// 	password: password

		// });
		console.log('token', this.token, regno)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,
			// 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTcxNjI1NTYsImlzcyI6ImFzaGxrYWRzMDEyIiwiYXVkIjoiYXNobGthZHMwMTIifQ.ncuz5lIbVUG37_Zvgs_z9d9STfuqCfG8E92LBZmTMUw`
		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.delete(environment.stage.API_V_URL + 'api/Vehicle/DeleteVehicle?registrationNo=' + regno, options);
	}

	handelAddVechice(registrationNo: any, modelNo: any, noOfSeat: any,vechicalType: any, acAvl: any) {
		const input = JSON.stringify({
			registrationNo: registrationNo,
			modelName: modelNo,
			vehicleType: vechicalType,
			numberOfSeat: parseInt(noOfSeat),
			acAvailable: acAvl

		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,

		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.post(environment.stage.API_V_URL + 'api/Vehicle/AddVehicle', input, options);
	}

	handelUpdateVechice(registrationNo: any, modelNo: any,  noOfSeat: any, vechicalType: any,acAvl: any) {
		const input = JSON.stringify({
			registrationNo: registrationNo,
			modelName: modelNo,
			vehicleType: vechicalType,
			numberOfSeat: parseInt(noOfSeat),
			acAvailable: acAvl

		});
		console.log('Input Data : ', input);

		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,

		});
		const options = {
			headers: httpHeaders
		};
		// console.log(environment[global.env].API_URL);
		// localStorage.setItem("Envurl", environment[global.env].API_URL);
		return this.httpClient.put(environment.stage.API_V_URL + 'api/Vehicle/UpdateVehicle', input, options);
	}

	//Booking
	getBookingData() {

		console.log('token', this.token)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,
		});
		const options = {
			headers: httpHeaders
		};

		return this.httpClient.get(environment.stage.API_B_URL + 'api/Booking/GetAllBookings', options);
	}

	deleteBookingData(regno: any) {

		console.log('token', this.token, regno)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.delete(environment.stage.API_B_URL + 'api/Booking/DeleteBooking?bookingID=' + regno, options);
	}

	handelAddBooking(fields: any = {}) {
		const input = JSON.stringify({
			...fields
		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment.stage.API_B_URL + 'api/Booking/AddBooking', input, options);
	}

	handelUpdateBooking(BookingID: any, Vehicle: any, Driver: any, TriFare: any, Distance: any, fields: any = {}) {
		const input = JSON.stringify({
			bookingID: parseInt(BookingID),
			vehicle: Vehicle,
			driver: Driver,
			tripFare: parseInt(TriFare),
			distance: parseInt(Distance),
			...fields
		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.put(environment.stage.API_B_URL + 'api/Booking/UpdateBooking', input, options);
	}

	//Driver
	getDriverData() {

		console.log('token', this.token)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,
		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.get(environment.stage.API_D_URL + 'api/Drivers/Drivers', options);
	}

	deleteDriverData(regno: any) {

		console.log('token', this.token, regno)
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,
		
		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.delete(environment.stage.API_D_URL + 'api/Drivers/DeleteDriver?licenseNumber=' + regno, options);
	}

	handelAddDriver(License_Number: any, Name: any, Age: any, VehicleType: any) {
		const input = JSON.stringify({
			licenseNumber: License_Number,
			name: Name,
			age: parseInt(Age),
			vehicleType: VehicleType
		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.post(environment.stage.API_D_URL + 'api/Drivers/AddDriver', input, options);
	}

	handelUpdateDriver(License_Number: any, Name: any, Age: any, VehicleType: any) {
		const input = JSON.stringify({
			licenseNumber: License_Number,
			name: Name,
			age: parseInt(Age),
			vehicleType: VehicleType
		});
		const httpHeaders = new HttpHeaders({
			'content-type': 'application/json',
			'cache-control': 'no-cache',
			'Authorization': `Bearer ${this.token}`,

		});
		const options = {
			headers: httpHeaders
		};
		return this.httpClient.put(environment.stage.API_D_URL + 'api/Drivers/UpdateDriver', input, options);
	}
}
