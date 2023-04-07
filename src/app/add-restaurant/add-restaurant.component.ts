import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../dashboard/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent implements OnInit {
  restaurantRecords: Restaurant = {
    id: 0,
    name: '',
    owner: '',
    mobile: '',
    email: '',
    location: '',
  };

  constructor(private rs: RestaurantService, private router: Router) {}

  ngOnInit(): void {}

  addRecords() {
    if (
      !this.restaurantRecords.name ||
      !this.restaurantRecords.owner ||
      !this.restaurantRecords.mobile ||
      !this.restaurantRecords.email ||
      !this.restaurantRecords.location
    ) {
      alert('Please fill all input areas');
      return;
    }
    this.rs.create(this.restaurantRecords).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
