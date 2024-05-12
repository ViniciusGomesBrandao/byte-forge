import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(

  ) { }


  openBrowser(url: string = "www.google.com", protocol: string = "https://"){
    window.open(`${protocol}${url}`, "_blank")
  }
}
