import weaviate from 'weaviate-ts-client'

const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});

const schemaRes = await client.schama.getter().do();