import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../dashboard/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css'],
})
export class EditRestaurantComponent implements OnInit {
  restaurantRecords: Restaurant = {
    id: 0,
    name: '',
    owner: '',
    mobile: '',
    email: '',
    location: '',
  };

  constructor(
    private rs: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.getbyId(id);
    });
  }

  getbyId(id: number) {
    this.rs.getbyId(id).subscribe((data) => {
      this.restaurantRecords = data;
    });
  }

  updateRecord() {
    this.rs.update(this.restaurantRecords).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }
  
}
