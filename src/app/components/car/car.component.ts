import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  carDto:CarDto[]=[];

  dataLoaded=false;
  checkIfCarNull = false;

  carImages: CarImage[]=[];
  carImageUrl: string = this.carImageService.apiImagesURL;

  filterText="";

  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute,
    private carImageService: CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
      }
    })

  }

  getCars(){
    this.carService.getCars()
    .subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId)
    .subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId)
    .subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carDto = response.data;
      this.dataLoaded = response.success;
      this.setPreviewImages(this.carDto);

      if(this.carDto.length==0){
        this.checkIfCarNull=true;
      }
      else{
        this.checkIfCarNull=false;
      }
    });
  }

  setPreviewImages(arabalar:CarDto[]){
    arabalar.forEach(car => {
      this.carImageService.getImagesByCarId(car.carId).subscribe((response) => {
        car.previewImagePath = this.carImageUrl +  "" + response.data[0].imagePath;
      });
    });
  }

}
