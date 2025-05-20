import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// This function:

// Starts the Angular app using AppComponent as the root.

// Uses appConfig for setting up services like routing or HTTP.

// If there's an error during the bootstrap process, it will catch it and log it using console.error().

