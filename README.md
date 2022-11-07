## Steps

1. Install Typescript Schema Validator

```
yarn add typescript-schema-validator -D
```

2. Create a schema ts file with interface / types

```typescript
// schema.ts
export interface UserRequest {
	name: string;
}
```

3. Run command below to generate schema from ts file

```
yarn generate-schema schema.ts generated-filename
```
