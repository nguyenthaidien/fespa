// environment.prod.ts (Production)
export const environment = {
    production: true,
    apiUrl: 'http://10.82.14.80:9090/api',
    featureFlag: false,
    keycloak: {
      url: 'https://10.82.14.80:8443',
      realm: 'DCMS-Realm',
      clientId: 'spring-gateway-client',
    }
  };