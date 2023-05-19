import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class IconLocalRegisterService {

  customIconList: Array<CustomIconItem> = [
    {svgName: "hasher", svgPath: "./../../assets/icons/hash-key.svg" }
  ]


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }


  async run(): Promise<void> {
    for (const newIcon of this.customIconList) {
      await this.registerSvgIcon(newIcon.svgName, newIcon.svgPath);
    }
  }

  registerSvgIcon(iconName: string, iconPath: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.matIconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath)
      );
      resolve();
    });
  }
}


interface CustomIconItem {
  svgName: string
  svgPath: string
}