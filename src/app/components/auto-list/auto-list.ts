import {Component, OnInit} from '@angular/core';
import {AutoListItemModel} from '../../models/autoListItem.model';
import {AutoService} from '../../services/auto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auto-list',
  standalone: false,
  templateUrl: './auto-list.html',
  styleUrl: './auto-list.css'
})
export class AutoList implements OnInit {

  autoVariable!: AutoListItemModel[]; // erre figyelni köll

  constructor(private router: Router, private autoService: AutoService) {
  }

  ngOnInit(): void {
        this.autoService.getAllAutos().subscribe({
          next: (auto) => {
            console.log(auto);
            this.autoVariable = auto;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log('Auto ist complete, Működik');
          }
        })
    }


  goToAutoDetails(id: number) {
    this.router.navigate(['/auto-details', id]); // amire navigál azt köll bekötni a router -be !

  }

  deleteAuto(id: number) {
    if (confirm('Are you sure, Bist Du Sicher ?')) {
      this.autoService.deleteAuto(id).subscribe({
        next: () => this.autoVariable = this.autoVariable.filter(auto => auto.id !== id),
        error: (err) => console.log(err),
        complete: () => console.log('Delete movie complete')
      });
    }
  }

}
