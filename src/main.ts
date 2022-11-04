import "dotenv/config";

import bootstrap from "./bootstrap/application";
import packageJson from "./shared/helpers/package-json.helper";
import { AppModule } from "./app.module";

bootstrap({ AppModule, packageJson });
