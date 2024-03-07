# Database

What you need to do here? Here's simple an example of Database (with Mongo)

URL Example: `mongodb://{host}:{port|27017}/{database-name}`

```typescript
const startDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/gdsc-mern-mastery')

    console.log('mongodb connected')
  } catch (err) {
    console.error('database: ', err)
    process.exit(1)
  }
}

export { startDatabase }
```
