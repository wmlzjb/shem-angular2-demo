/* 
    polyfills - 我们在大多数现代浏览器中运行 Angular 程序时需要的标准填充物。

    vendor - 我们需要的提供商文件： Angular 、 Lodash 、 bootstrap.css ……

    main - 我们的应用代码。
 */


// The browser platform without a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module factory produced by the static offline compiler
import { AppModule } from './app';

// Launch with the app module factory.
platformBrowserDynamic().bootstrapModule(AppModule);