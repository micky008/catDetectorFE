import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testbarchart';

  basicData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  };

  basicOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

}
