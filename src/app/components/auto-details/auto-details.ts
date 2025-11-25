import {Component, OnInit} from '@angular/core';
import {AutoDetailsToClientModelModel} from '../../models/autoDetailsToClientModel.model';
import {ActivatedRoute} from '@angular/router';
import { AutoService} from '../../services/auto.service';

@Component({
  selector: 'app-auto-details',
  standalone: false,
  templateUrl: './auto-details.html',
  styleUrl: './auto-details.css'
})
export class AutoDetails implements OnInit {

  auto!: AutoDetailsToClientModelModel;


  constructor(private activatedRoute: ActivatedRoute,
              private autoService: AutoService) {
  }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const id = Number(paramMap.get('id'));  // Az 'id' paraméter lekérése és számmá alakítása
        if (id) {
          this.autoService.getAuto(id).subscribe({
            next: (auto) => this.auto = auto,  // A backendről érkező adat beállítása a komponens változójába
            error: (err) => console.error(err),    // Hibakezelés konzolra írással
            complete: () => console.log('Get auto Jóó completed')  // Lekérés befejeződésének naplózása
          })
        }
      }
    )

  }


}
