# Model

What you need to do here? Here's an example of Model / Schema (with Mongo)

```typescript
// Mongoose
import { Schema, model } from 'mongoose'

const someSchema = new Schema({
  field: {
    type: String, // Javascript Type
    required: true
  }
})

const Model = model('ModelName', someSchema)

export { Model }
```
