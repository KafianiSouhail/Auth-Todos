import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatorService } from 'src/app/core/adapters';
import { Helper } from 'src/app/core/helpers';
import { MyRoutes } from 'src/app/core/models/enums';
import { Language } from 'src/app/core/models/interfaces';
import { AuthFacade } from 'src/app/features/auth/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  readonly myRoutes:typeof MyRoutes = MyRoutes;
  isLoggedIn:boolean = false;
  selectedLanguage:string = 'en';
  languages: Language[] = [];

  constructor(
    private authFacade:AuthFacade, 
    private helper:Helper,
    private translator:TranslatorService
    ) { }

  ngOnInit(): void {
    this.authFacade.getIsloggedIn$.subscribe(response => this.isLoggedIn=response);
    this.fetchLanguages();
  }

  onLogout(): void{
    this.authFacade.logout();
  }

  fetchLanguages(): void{
    this.helper.fetchLanguages((languages: Language[]) => this.languages = languages);
  }

  onLanguageChange(language: string){    
    this.translator.setLanguage(language);
  }


}
