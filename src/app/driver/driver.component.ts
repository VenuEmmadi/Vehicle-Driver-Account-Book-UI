import { Component, OnInit } from '@angular/core';
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
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  displayedColumns: string[] = ['Registration_No', 'Model_Name', 'Vehicle_Type', 'Number_Of_Seat', 'AC_Avail'];

  dataSource: any = [];
  res: any;
  DriversData: any = [];
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

  License_Number: any;
  Name: any;
  Age: any;
  VehicleType: any;
  Address: any;

  License_NumberU: any;
  NameU: any;
  AgeU: any;
  VehicleTypeU: any;
  AddressU: any;
  role: string = '';
  filterString: any;

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    this.getDriverData();
    this.role = this.dataService.role;
  }


  handelVechile() {
    this.router.navigate(['dashboard']);
  }
  handelBooking() {
    this.router.navigate(['booking']);

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


  // Driver

  getDriverData() {
    this.dataService
      .getDriverData()
      .subscribe((data) => {
        console.log("data vec", data)
        this.res = data;
        if (this.res.isSuccess == true) {
          this.DriversData = this.res.drivers
          console.log("this.DriversData", this.DriversData)

        } else {

          alert('Sorry Login Fail');
        }

      })
  }

  handelLicense_Number(event: any) {
    this.License_Number = event.target.value;

  }
  handelName(event: any) {
    this.Name = event.target.value;
  }
  handelAge(event: any) {
    this.Age = event.target.value;
  }
  handelVehicleType(event: any) {
    this.VehicleType = event.target.value;
  }


  handelAddDriver() {
    if (this.License_Number.length > 0 && this.Name.length > 0 && this.Age.length > 0 && this.VehicleType.length > 0) {
      this.dataService
        .handelAddDriver(this.License_Number, this.Name, this.Age, this.VehicleType)
        .subscribe((data) => {

          console.log("data", data)
          this.res = data;
          console.log("data 1", this.res.isSuccess)
          if (this.res.isSuccess == true) {
            this.getDriverData()
            // alert('vechicle  added sucessfull');

          } else {

            alert('sorry vechicle not added');
          }

        });

    }
    else {
      alert('Please Enter All Fields');
    }


  }

  handelLicense_NumberU(event: any) {
    this.License_NumberU = event.target.value;

  }
  handelNameU(event: any) {
    this.NameU = event.target.value;
  }
  handelAgeU(event: any) {
    this.AgeU = event.target.value;
  }
  handelVehicleTypeU(event: any) {
    this.VehicleTypeU = event.target.value;
  }


  handelUpdateDriver() {
    if (this.License_NumberU.length > 0 && this.NameU.length > 0 && this.AgeU > 0 && this.VehicleTypeU.length > 0) {
      this.dataService
        .handelUpdateDriver(this.License_NumberU, this.NameU, this.AgeU, this.VehicleTypeU)
        .subscribe((data) => {

          console.log("data", data)
          this.res = data;
          console.log("data 1", this.res.isSuccess)
          if (this.res.isSuccess == true) {
            this.getDriverData()
            // alert('vechicle Update sucessfull');

          } else {

            alert('sorry vechicle not added');
          }

        });

    }
    else {
      alert('Please Enter All Fields');
    }


  }

  deleteDriverdata(data: { licenseNumber: any; }) {
    console.log("delete", data.licenseNumber)
    this.dataService
      .deleteDriverData(data.licenseNumber)
      .subscribe((data) => {
        console.log("data vec", data)
        this.res = data;
        if (this.res.isSuccess == true) {
          this.getDriverData()
          // alert('data delete sucess');
        } else {

          alert('data not delete ');
        }

      })
  }

  // updatedriverdata(datas: any) {
  //   this.License_NumberU = datas.licenseNumber;
  //   this.NameU = datas.name;
  //   this.AgeU = datas.age;
  //   this.VehicleTypeU = datas.vehicleType;
  // }
  filterDrivers(){
    this.DriversData = this.res.drivers.filter((veh: any) => {
      const _str = this.filterString.trim().toLowerCase();
      return Object.values(veh).some((val: any) => val && val.toString().toLowerCase().indexOf(_str) >= 0);
  });
}

}
