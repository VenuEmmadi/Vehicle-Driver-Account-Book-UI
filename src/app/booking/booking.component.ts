import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})



export class BookingComponent implements OnInit {

  displayedColumns: string[] = ['Registration_No', 'Model_Name', 'Vehicle_Type', 'Number_Of_Seat', 'AC_Avail'];

  dataSource: any = [];
  res: any;
  bookingsData: any = [];
  selected = 'option2';
  registrationNo: any;
  modelNo: any;
  vechicalType: any;
  noOfSeat: any;
  acAvl: any;

  registrationNoU: any;
  modelNoU: any;
  vechicalTypeU: any;
  noOfSeatU: any;
  acAvlU: any;

  BookingID: any;
  Vehicle: any;
  Driver: any;
  TriFare: any;
  Distance: any;

  BookingIDU: any;
  VehicleU: any;
  DriverU: any;
  TriFareU: any;
  DistanceU: any;

  role: string = '';
  filterString: any;
  bookingTypes: Array<string> = ['pickup', 'drop', 'round', 'tour'];
  bokingType: string = '';
  bookingStartDate: any;
  bookingEndDate: any;
  campaignOne = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date(2022, 7, 16)),
  });
  FromLocationU: any;
  ToLocationU: any;
  FuelExpenseU: any;
  DriverShareU: any;
  RemarksU: any;
  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.getBookingData();
    this.role = this.dataService.role;
  }

  handelVechile() {
    this.router.navigate(['dashboard']);
  }
  handelDriver() {
    this.router.navigate(['driver']);
  }


  deletevehicledata(data: { registrationNo: any; }) {
    console.log("delete", data.registrationNo)
    this.dataService.deleteVehicleData(data.registrationNo).subscribe((data) => {
      console.log("data vec", data)
      this.res = data;
      if (this.res.isSuccess == true) {

        alert('data delete sucess');
      } else {

        alert('data not delete ');
      }

    })
  }

  handelRegistration_NoU(event: any) {
    this.registrationNoU = event.target.value;
  }

  handelModel_NameU(event: any) {
    this.modelNoU = event.target.value;
  }
  handelVehicle_TypeU(event: any) {
    this.vechicalTypeU = event.target.value;
  }
  handelNumber_Of_SeatU(event: any) {
    this.noOfSeatU = event.target.value;
  }
  handelAC_AvailableU(event: any) {
    this.acAvlU = event.target.value;
  }

  handelUpdateVechice() {

    if (this.registrationNoU.length > 0 && this.modelNoU.length > 0 && this.noOfSeatU > 0 && this.vechicalTypeU.length > 0 && this.acAvlU.length > 0) {
      this.dataService.handelUpdateVechice(this.registrationNoU, this.modelNoU, this.noOfSeatU, this.vechicalTypeU, this.acAvlU).subscribe((data) => {
        // const resSTR = JSON.stringify(res);
        // const resJSON = JSON.parse(resSTR);
        console.log("data", data)
        this.res = data;
        console.log("data 1", this.res.isSuccess)
        if (this.res.isSuccess == true) {

          // localStorage.setItem('token', JSON.stringify(this.res.token));
          // window.location.href = '/dashboard';
          alert('data  added sucessfull');

        } else {

          alert('sorry data not updated');
        }

      });

    }
    else {
      alert('Please Enter All Fields');
    }

  }

  //
  handelBooking_No(event: any) {
    this.BookingID = event.target.value;
  }
  handelVehicle(event: any) {
    this.Vehicle = event.target.value;
  }
  handelDrivers(event: any) {
    this.Driver = event.target.value;
  }
  handelTriFare(event: any) {
    this.TriFare = event.target.value;
  }
  handelDistance(event: any) {
    this.Distance = event.target.value;
  }


  handelAddBooking() {

    if (this.Vehicle.length > 0 && this.Driver.length > 0 && this.TriFareU > 0 && this.DistanceU > 0) {
      this.dataService
        .handelAddBooking({
          "fromLocation": this.FromLocationU,
          "toLocation": this.ToLocationU,
          "distance": this.DistanceU,
          "type": this.bokingType,
          "fuelExpense": this.FuelExpenseU,
          "driverShare": this.DriverShareU,
          "remarks": this.RemarksU,
          vehicle: this.Vehicle,
          driver: this.Driver,
          tripFare: parseInt(this.TriFareU),
        })
        .subscribe((data) => {

          console.log("data", data)
          this.res = data;
          console.log("data 1", this.res.isSuccess)
          if (this.res.isSuccess == true) {
            this.getBookingData()
            // alert('Added Booking Sucessfull');

          } else {

            alert('Booking not added');
          }

        });

    }
    else {
      alert('Please Enter All Fields');
    }


  }


  getBookingData() {
    this.dataService
      .getBookingData()
      .subscribe((data) => {
        console.log("data vec", data)
        this.res = data;
        if (this.res.isSuccess == true) {
          this.bookingsData = this.res.bookings
          console.log("this.bookingsData", this.bookingsData)
        } else {

          alert('Sorry Login Fail');
        }

      })
  }

  deleteBookingdata(data: { bookingID: any; }) {
    console.log("delete", data.bookingID)
    alert('delete called');
    this.dataService
      .deleteBookingData(data.bookingID)
      .subscribe((data) => {
        //alert('subscribe called');
        console.log("data vec", data)
        this.res = data;
        if (this.res.isSuccess == true) {
          this.getBookingData()
          //alert('data delete sucess');
        } else {

          alert('data not deleted');
        }

      })
  }

  //
  handelBooking_NoU(event: any) {
    this.BookingIDU = event.target.value;
  }
  handelVehicleU(event: any) {
    this.VehicleU = event.target.value;
  }
  handelDriversU(event: any) {
    this.DriverU = event.target.value;
  }
  handelTriFareU(event: any) {
    this.TriFareU = event.target.value;
  }
  handelDistanceU(event: any) {
    this.DistanceU = event.target.value;
  }

  handelUpdateBooking() {

    if (this.BookingIDU > 0 && this.VehicleU.length > 0 && this.DriverU.length > 0 && this.TriFareU > 0 && this.DistanceU > 0) {
      this.dataService.
        handelUpdateBooking(this.BookingIDU, this.VehicleU, this.DriverU, this.TriFareU, this.DistanceU, {
          "fromLocation": this.FromLocationU,
          "toLocation": this.ToLocationU,
          "distance": this.DistanceU,
          "type": this.bokingType,
          "tripFare": this.TriFareU,
          "fuelExpense": this.FuelExpenseU,
          "driverShare": this.DriverShareU,
          "remarks": this.RemarksU
        })
        .subscribe((data) => {

          console.log("data", data)
          this.res = data;
          console.log("data 1", this.res.isSuccess)
          if (this.res.isSuccess == true) {
            this.getBookingData()
            // alert('data  added sucessfull');

          } else {

            alert('sorry data not updated');
          }

        });

    }
    else {
      alert('Please Enter All Fields');
    }

  }
  updatebookingdata(datas: any) {
    this.BookingIDU = datas.bookingID;
    this.VehicleU = datas.vehicle;
    this.DriverU = datas.driver;
    this.FromLocationU = datas.fromLocation
    this.ToLocationU = datas.toLocation
    this.TriFareU = datas.tripFare;
    this.DistanceU = datas.distance;
    this.bokingType = datas.type;
    this.FuelExpenseU = datas.fuelExpense;
    this.DriverShareU= datas.driverShare;
    this.RemarksU = datas.remarks;
  }
  filterBooking(){
    this.bookingsData = this.res.bookings.filter((veh: any) => {
      const _str = this.filterString.trim().toLowerCase();
      return Object.values(veh).some((val: any) => val && val.toString().toLowerCase().indexOf(_str) >= 0);
    });
  }
}
