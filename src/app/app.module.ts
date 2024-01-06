import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from "./commons/commons.module";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from "../environments/environment";
import { AuthInterceptorProviders } from "./interceptor/auth.interceptor";
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoadingBarHttpClientModule,
    AppRoutingModule,
    LoadingBarModule,
    HttpClientModule,
    CommonsModule,
    TranslateModule.forRoot({
      defaultLanguage: environment.lang,
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    AuthInterceptorProviders,
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/langs/', '.json');
}
