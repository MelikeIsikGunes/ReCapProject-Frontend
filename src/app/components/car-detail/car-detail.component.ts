import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { Customer } from 'src/app/models/customer';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carImages:CarImage[]=[];
  carDto:CarDto[]=[];

  filterText="";
  carImageUrl:string='';
  carImageUrlDefault: string = this.carImageService.apiImagesURL;

 

  constructor(private carImageService:CarImageService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parameter) => {
      if (parameter['carId']) {
        this.getCarDetailById(parameter['carId']); 
        this.getCarImagesByCarId(parameter['carId']);
      }
    });

    
  }

  getCarDetailById(carId: number) {
    this.carService.GetCarDetailsById(carId).subscribe((response) => {
      this.carDto = response.data;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;

      this.carImageUrl =
        this.carImageUrlDefault + '' + this.carImages[0].imagePath;
    });
  }

 

  

}
