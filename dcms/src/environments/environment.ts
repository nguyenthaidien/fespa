// environment.ts (Development)
export const environment = {
    production: false,
    apiUrl: 'http://localhost:9090/api',
    featureFlag: true,
    keycloak: {
      url: 'https://10.82.14.80:8443',
      realm: 'DCMSDEV-Realm',
      clientId: 'spring-gateway-client',
    }
  };

