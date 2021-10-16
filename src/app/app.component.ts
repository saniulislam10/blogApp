import { Component } from '@angular/core';
import { GetApiService } from './Service/get-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog Town';

  constructor(
    private api: GetApiService,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.api.getApi()
    .subscribe(res => {
        console.warn("get api data: ", res.data)
    }
    )
}

onSubmit(data) {
  console.warn(data);
  this.api.postApi(data).subscribe((result) => {
    console.warn("get api data: ", result);

  })
}
}
