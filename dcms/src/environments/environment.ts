// environment.ts (Development)
export const environment = {
  version: '1.0.0',
  production: false,
  apiUrl: 'https://localhost:9090/api',
  featureFlag: true,
  keycloak: {
    url: 'https://10.82.14.80:8443',
      realm: 'DCMSDEV-Realm',
      clientId: 'spring-gateway-client',
    }
  };

