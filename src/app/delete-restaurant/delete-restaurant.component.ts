import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.component.html',
  styleUrls: ['./delete-restaurant.component.css'],
})


export class DeleteRestaurantComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteRestaurantComponent>,
    private res: RestaurantService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
    this.res.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id)
    })
  }
}
