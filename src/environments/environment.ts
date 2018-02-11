 import { appConfigTest } from './../app/app.config.test';
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const PROVIDERS: any[] = [
  { provide: 'AppConfig', useFactory: getConfig },
  { provide: 'Window', useFactory: getWindow }
];

export function getConfig() {
  return appConfigTest;
}

export function getWindow() {
  return window;
}

export const ENV_PROVIDERS = [
  ...PROVIDERS,
];

export const environment = {
  apiUrl: 'http://localhost:8080/api/spamreports',
  apiToken: '640cba331ea22491f11f6c2a07426cd5ed1f5a51',
  production: false
};

